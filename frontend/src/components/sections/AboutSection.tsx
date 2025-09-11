import React from 'react';
import OSWindow from '../OSWindow';
import './AboutSection.css';

interface AboutSectionProps {
  id?: string;
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ 
  id = 'about', 
  className = '' 
}) => {
  return (
    <section id={id} className={`about-section ${className}`}>
      <OSWindow
        title="About - Notepad"
        icon="📝"
        className="notepad-window"
        showControls={true}
      >
        <div className="notepad-content">
          <div className="notepad-formatted">
            <div className="notepad-header-section">
              <h1 className="notepad-main-title">🎨 ColourMeNFT</h1>
              <p className="notepad-subtitle">Revolutionary Web3 Paint Platform</p>
              
              <div className="notepad-meta-info">
                <div className="meta-item">
                  <span className="meta-label">Date:</span>
                  <span className="meta-value">September 2025</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Version:</span>
                  <span className="meta-value">1.0</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Platform:</span>
                  <span className="meta-value">Base Network</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Mint Price:</span>
                  <span className="meta-value highlight">$1 USD</span>
                </div>
              </div>
            </div>

            <div className="notepad-section">
              <h2 className="section-title">📖 About This Project</h2>
              <p className="section-description">
                Welcome to the future of digital art creation! ColourMeNFT combines the 
                nostalgia of retro computing with cutting-edge blockchain technology.
              </p>
              <p className="section-description">
                Our platform brings together artists, collectors, and Web3 enthusiasts in
                a unique creative ecosystem where every pixel tells a story.
              </p>
            </div>

            <div className="notepad-section">
              <h2 className="section-title">✨ What Makes Us Special</h2>
              <ul className="feature-list">
                <li>🎨 Create stunning pixel art directly in your browser</li>
                <li>⛓️ Everything stored <strong>ON-CHAIN</strong> as SVG format</li>
                <li>💰 Mint your masterpieces on Base network for just <strong>$1</strong></li>
                <li>🤝 Collaborate and modify existing NFTs (living art!)</li>
                <li>👥 Community-driven creative platform</li>
                <li>🔒 No external dependencies - truly decentralized art</li>
              </ul>
            </div>

            <div className="notepad-section">
              <h2 className="section-title">🚀 Key Features</h2>
              <div className="features-grid">
                <div className="feature-item">✅ Dynamic SVG rendering system</div>
                <div className="feature-item">🏆 Permanent ownership & provenance</div>
                <div className="feature-item">🌱 Living, evolving digital art</div>
                <div className="feature-item">⚡ Low-cost transactions on Base</div>
                <div className="feature-item">💻 Retro-style interface</div>
                <div className="feature-item">🖼️ Token gallery and explorer</div>
                <div className="feature-item">🔄 Real-time collaboration tools</div>
                <div className="feature-item">📤 Export functionality (SVG, PNG)</div>
              </div>
            </div>

            <div className="notepad-section">
              <h2 className="section-title">💡 How It Works</h2>
              <ol className="steps-list">
                <li><strong>Connect</strong> your Web3 wallet (MetaMask, etc.)</li>
                <li><strong>Create</strong> amazing pixel art using our retro tools</li>
                <li><strong>Mint</strong> your creation as an NFT for $1</li>
                <li><strong>Share</strong> and trade with the community</li>
                <li><strong>Evolve</strong> your existing tokens (costs gas)</li>
              </ol>
            </div>

            <div className="notepad-section">
              <h2 className="section-title">⚙️ Technical Details</h2>
              <div className="tech-specs">
                <div className="spec-row">
                  <span className="spec-label">Blockchain:</span>
                  <span className="spec-value">Base (Ethereum L2)</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Token Standard:</span>
                  <span className="spec-value">ERC-721</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Storage:</span>
                  <span className="spec-value">On-chain SVG</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Rendering:</span>
                  <span className="spec-value">Dynamic, client-side</span>
                </div>
              </div>
            </div>

            <div className="notepad-section">
              <h2 className="section-title">🌐 Community & Support</h2>
              <p className="section-description">
                Join thousands of artists in this Web3 paint adventure! Experience the 
                perfect blend of nostalgia and innovation.
              </p>
              
              <div className="social-links">
                <div className="social-item">
                  <span className="social-icon">🌐</span>
                  <span className="social-text">ColourMeNFT.xyz</span>
                </div>
                <div className="social-item">
                  <span className="social-icon">🐦</span>
                  <span className="social-text">@ColourMeNFT</span>
                </div>
                <div className="social-item">
                  <span className="social-icon">📱</span>
                  <span className="social-text">@TechnicallyWeb3</span>
                </div>
                <div className="social-item">
                  <span className="social-icon">💬</span>
                  <span className="social-text">Discord Coming Soon!</span>
                </div>
              </div>
            </div>

            <div className="notepad-footer">
              <p>Built with ❤️ by the TechnicallyWeb3 team</p>
              <p className="copyright">© 2025 ColourMeNFT - Powered by Base Network</p>
            </div>
          </div>
        </div>
      </OSWindow>
    </section>
  );
};

export default AboutSection;
