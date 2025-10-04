import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CertificationBadges = ({ certifications }) => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredCertifications = filter === 'all' 
    ? certifications 
    : certifications?.filter(cert => cert?.status === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-success bg-success/10 border-success/20';
      case 'expired': return 'text-destructive bg-destructive/10 border-destructive/20';
      case 'pending': return 'text-warning bg-warning/10 border-warning/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getProviderLogo = (provider) => {
    const logos = {
      'Google': 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop&crop=center',
      'Microsoft': 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=100&h=100&fit=crop&crop=center',
      'AWS': 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop&crop=center',
      'HubSpot': 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center',
      'Salesforce': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center'
    };
    return logos?.[provider] || 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=100&h=100&fit=crop&crop=center';
  };

  return (
    <>
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-card-foreground">Certifications</h3>
          <div className="flex items-center space-x-2">
            <select
              value={filter}
              onChange={(e) => setFilter(e?.target?.value)}
              className="bg-muted border border-border rounded-lg px-3 py-2 text-card-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="expired">Expired</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCertifications?.map((cert) => (
            <div
              key={cert?.id}
              className="relative bg-muted rounded-xl p-4 border border-border hover:border-accent/50 smooth-transition cursor-pointer group"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Status badge */}
              <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(cert?.status)}`}>
                {cert?.status?.charAt(0)?.toUpperCase() + cert?.status?.slice(1)}
              </div>

              {/* Provider logo */}
              <div className="w-16 h-16 rounded-lg overflow-hidden mb-4 bg-background">
                <img 
                  src={getProviderLogo(cert?.provider)}
                  alt={cert?.provider}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Certification info */}
              <div className="space-y-2">
                <h4 className="font-semibold text-card-foreground group-hover:text-accent smooth-transition line-clamp-2">
                  {cert?.name}
                </h4>
                <p className="text-sm text-muted-foreground">{cert?.provider}</p>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={14} />
                  <span>Issued {cert?.issueDate}</span>
                </div>

                {cert?.expiryDate && (
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    <span>Expires {cert?.expiryDate}</span>
                  </div>
                )}

                {cert?.credentialId && (
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Hash" size={14} />
                    <span className="font-mono text-xs">{cert?.credentialId?.slice(0, 12)}...</span>
                  </div>
                )}

                {cert?.verified && (
                  <div className="flex items-center space-x-1 text-success">
                    <Icon name="CheckCircle" size={14} />
                    <span className="text-xs font-medium">Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredCertifications?.length === 0 && (
          <div className="text-center py-8">
            <Icon name="Award" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No certifications found for the selected filter</p>
          </div>
        )}

        {/* Summary stats */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-success">{certifications?.filter(c => c?.status === 'active')?.length}</p>
              <p className="text-sm text-muted-foreground">Active</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-warning">{certifications?.filter(c => c?.status === 'pending')?.length}</p>
              <p className="text-sm text-muted-foreground">Pending</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-destructive">{certifications?.filter(c => c?.status === 'expired')?.length}</p>
              <p className="text-sm text-muted-foreground">Expired</p>
            </div>
          </div>
        </div>
      </div>
      {/* Certification Detail Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="bg-card rounded-xl border border-border brand-shadow max-w-lg w-full">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-background">
                    <img 
                      src={getProviderLogo(selectedCert?.provider)}
                      alt={selectedCert?.provider}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-card-foreground">{selectedCert?.name}</h2>
                    <p className="text-muted-foreground">{selectedCert?.provider}</p>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border mt-2 ${getStatusColor(selectedCert?.status)}`}>
                      {selectedCert?.status?.charAt(0)?.toUpperCase() + selectedCert?.status?.slice(1)}
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedCert(null)}
                  iconName="X"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Description</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{selectedCert?.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Issue Date</h3>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} className="text-accent" />
                      <span className="text-card-foreground">{selectedCert?.issueDate}</span>
                    </div>
                  </div>
                  
                  {selectedCert?.expiryDate && (
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Expiry Date</h3>
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={16} className="text-accent" />
                        <span className="text-card-foreground">{selectedCert?.expiryDate}</span>
                      </div>
                    </div>
                  )}
                </div>

                {selectedCert?.credentialId && (
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Credential ID</h3>
                    <div className="flex items-center space-x-2">
                      <Icon name="Hash" size={16} className="text-accent" />
                      <span className="text-card-foreground font-mono text-sm">{selectedCert?.credentialId}</span>
                    </div>
                  </div>
                )}

                {selectedCert?.skills && selectedCert?.skills?.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Skills Covered</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert?.skills?.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  {selectedCert?.verified && (
                    <div className="flex items-center space-x-2 text-success">
                      <Icon name="CheckCircle" size={16} />
                      <span className="text-sm font-medium">Verified Credential</span>
                    </div>
                  )}
                  
                  {selectedCert?.verificationUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(selectedCert?.verificationUrl, '_blank')}
                      iconName="ExternalLink"
                      iconPosition="right"
                    >
                      Verify
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificationBadges;