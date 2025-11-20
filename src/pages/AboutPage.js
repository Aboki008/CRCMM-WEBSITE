import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8 font-serif">
            Who We Are
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="prose prose-lg max-w-none space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Christ the Redeemer Cares and Compassion Ministry (CRCCM)
              </h2>
              <p className="text-gray-700 mb-4">
                CRCCM is a ministry that shares the love of Christ with orphans, widows, children, the less privileged
                and vulnerable by meeting their spiritual, physical and emotional needs in accordance with Acts 10:38.
              </p>
            </section>

            <section className="bg-gradient-to-r from-primary to-accent text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl">
                To share the love of Christ with orphans, widows and the less privileged through programs and outreaches,
                and to meet the needs of children through our weekly Bible club.
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-4">
                  To reflect the heart of Jesus by touching lives with His compassion and care, restoring hope to those
                  who are hurting and transforming communities through the power of His love.
                </p>
                <p className="text-gray-600">
                  We envision a society where orphans, widows, children, the less privileged and vulnerable are well
                  taken care of and embraced with the warm love of Jesus Christ.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">What We Do</h3>
                <p className="text-gray-600 mb-3">
                  Our ministry outreaches and programs include:
                </p>
                <ul className="text-gray-600 space-y-2 list-disc pl-5">
                  <li>Children's Bible Club</li>
                  <li>Back to School Program</li>
                  <li>Food Bank Project</li>
                  <li>Hygiene Project</li>
                  <li>Widows Outreach</li>
                </ul>
              </div>
            </section>

            <section className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Core Values</h3>
              <ul className="text-gray-600 space-y-2 list-disc pl-5 mb-4">
                <li>
                  <span className="font-semibold">Christ-likeness:</span> We strive to model the compassion, humility and
                  love of Jesus in our actions.
                </li>
                <li>
                  <span className="font-semibold">Compassion:</span> We are moved by the needs of others and respond with
                  genuine care.
                </li>
                <li>
                  <span className="font-semibold">Faith:</span> We depend on God for direction, provision and strength,
                  trusting Him to transform lives through the ministry.
                </li>
                <li>
                  <span className="font-semibold">Love:</span> We believe that love is the foundation of true ministry,
                  guiding how we give, speak and interact with every person.
                </li>
              </ul>
              <p className="text-gray-600">
                Following the example of Jesus in Acts 10:38, we go about doing good by giving practical help, spiritual
                encouragement and compassionate support to orphanages, students and pupils, widows, individuals in need
                and by nurturing children through the Bible club. It's CRCCM.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
;

export default AboutPage;