import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8 font-serif">
            Our Story
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-primary to-accent text-white p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl">
                To share the love of Christ with everyone we meet, making disciples who transform their communities through faith, hope, and love.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-4">
                  We envision a world where every person experiences the transformative love of Jesus Christ and lives in the fullness of God's purpose.
                </p>
                <p className="text-gray-600">
                  Through worship, fellowship, and service, we strive to be a beacon of hope and a center for spiritual growth in our community.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Christ-centered worship and teaching</li>
                  <li>• Authentic community and relationships</li>
                  <li>• Compassionate service and outreach</li>
                  <li>• Spiritual growth and discipleship</li>
                  <li>• Generous giving and stewardship</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Beliefs</h3>
              <p className="text-gray-600 mb-4">
                We believe in the triune God: Father, Son, and Holy Spirit. We affirm the authority of Scripture 
                and the centrality of Jesus Christ for salvation. We celebrate the diversity of God's people 
                and welcome all who seek to know Him.
              </p>
              <p className="text-gray-600">
                Our theology is rooted in the historic Christian faith, and we embrace the power of the Holy Spirit 
                to transform lives and communities today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;