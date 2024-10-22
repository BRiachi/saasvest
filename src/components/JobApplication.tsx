import React, { useState } from 'react';

interface JobApplicationProps {
  title: string;
  description: string;
  details: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  resume: File | null;
  coverLetter: string;
}

const JobApplication: React.FC<JobApplicationProps> = ({ title, description, details }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const templateParams = {
      to_email: 'baz@saasvest.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      job_title: title,
      cover_letter: formData.coverLetter
    };

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(templateParams),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Application submitted successfully:', result);
        setSubmitStatus('success');
        alert('Application submitted successfully!');
      } else {
        console.error('Failed to submit application:', result);
        setSubmitStatus('error');
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitStatus('error');
      alert('Failed to submit application. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="blue-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-center uppercase font-display">{title}</h1>
          <p className="text-xl text-center max-w-3xl mx-auto font-display">{description}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 uppercase font-display">Job Details</h2>
            <div dangerouslySetInnerHTML={{ __html: details }} className="prose max-w-none font-display" />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 uppercase font-display">Apply Now</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500" onChange={handleInputChange} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500" onChange={handleInputChange} />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" id="phone" name="phone" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500" onChange={handleInputChange} />
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume</label>
                <input type="file" id="resume" name="resume" required className="mt-1 block w-full" onChange={handleFileChange} />
              </div>
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Cover Letter</label>
                <textarea id="coverLetter" name="coverLetter" rows={4} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500" onChange={handleInputChange}></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;