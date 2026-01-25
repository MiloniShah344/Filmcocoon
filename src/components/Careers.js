import React, { useState } from 'react';
import { Send, Upload, Link as LinkIcon } from 'lucide-react';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null,
    resumeLink: '',
    resumeType: 'upload' // 'upload' or 'link'
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleResumeTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      resumeType: type,
      resume: null,
      resumeLink: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('message', formData.message);
    
    if (formData.resumeType === 'upload' && formData.resume) {
      data.append('resume', formData.resume);
    } else if (formData.resumeType === 'link' && formData.resumeLink) {
      data.append('resumeLink', formData.resumeLink);
    }

    try {
      const res = await fetch('http://localhost:4001/api/sendCareerApplication', {
        method: 'POST',
        body: data
      });

      if (res.ok) {
        setStatus('Application sent successfully! ✓');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          resume: null,
          resumeLink: '',
          resumeType: 'upload'
        });
        
        // Clear status after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('Failed to send. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Error sending application.');
    }
  };

  return (
    <section id="careers" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Join the Team</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 mt-2 mb-4">
            Careers at <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800">FilmCocoon</span>
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            We're always open to collaborating with passionate creatives. Apply for the position you aspire to!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-800 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
          <h3 className="text-2xl font-bold text-stone-900 mb-6">Apply Now</h3>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-stone-700 font-semibold mb-2 text-sm">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-orange-600 focus:outline-none transition-colors"
                  placeholder="Your Full Name"
                />
              </div>
              
              <div>
                <label className="block text-stone-700 font-semibold mb-2 text-sm">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-orange-600 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-700 font-semibold mb-2 text-sm">Phone (Optional)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-orange-600 focus:outline-none transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>
            
            <div>
              <label className="block text-stone-700 font-semibold mb-2 text-sm">Message (Optional)</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-orange-600 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about yourself and the position you're interested in..."
              />
            </div>

            {/* Resume Upload or Link Option */}
            <div>
              <label className="block text-stone-700 font-semibold mb-3 text-sm">Resume / Portfolio (Optional)</label>
              
              {/* Toggle Buttons */}
              <div className="flex gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => handleResumeTypeChange('upload')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                    formData.resumeType === 'upload'
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  <Upload className="w-4 h-4 inline mr-2" />
                  Upload File
                </button>
                <button
                  type="button"
                  onClick={() => handleResumeTypeChange('link')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                    formData.resumeType === 'link'
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  <LinkIcon className="w-4 h-4 inline mr-2" />
                  Provide Link
                </button>
              </div>

              {/* Upload File Option */}
              {formData.resumeType === 'upload' && (
                <div>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="w-full text-stone-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-600 file:text-white hover:file:bg-orange-700 cursor-pointer"
                  />
                  <p className="text-xs text-stone-500 mt-2">PDF, DOC, or DOCX (Max 5MB)</p>
                </div>
              )}

              {/* Link Option */}
              {formData.resumeType === 'link' && (
                <input
                  type="url"
                  name="resumeLink"
                  value={formData.resumeLink}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-orange-600 focus:outline-none transition-colors"
                  placeholder="https://yourportfolio.com or Google Drive link"
                />
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'Sending...'}
              className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              {status === 'Sending...' ? 'Sending...' : 'Submit Application'}
            </button>
          </form>

          {status && status !== 'Sending...' && (
            <div className={`mt-4 p-4 rounded-xl text-center font-semibold ${
              status.includes('success')
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {status}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Careers;