const Overview = () => {
    const details = [
      { label: 'Type of Project', value: 'Integrated Township' },
      { label: 'Location', value: 'Near Hinjawadi, Pune' },
      { label: 'Land Area', value: '400 Acres' },
      { label: 'No. of Towers', value: '3 Towers' },
      { label: 'No. of Units', value: 'On Request' },
      { label: 'Unit Variants', value: '2, 2.5, 3.5, 4 & 5 BHK' },
      { label: 'Size Range', value: '665 - 3600+ Sq.Ft.' },
      { label: 'Price Range', value: 'Starting from ₹72 L*' },
      { label: 'Possession Date', value: 'On Request' },
    ];
  
    return (
      <section id="overview" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Project Overview
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {details.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium text-gray-600">{item.label}:</span>
                  <span className="text-gray-800">{item.value}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">
                A life that comes in all shades of wellness and happiness
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Situated just 4.5 kilometers away from Hinjawadi, the IT hub of Pune, 
                Kolte Patil Life Republic is a 395 acres integrated township with 
                undulating greens. Designed with one single objective: to create 
                future-proof spaces and a meaningful way of life for the thinking minds, 
                it is a community built for all.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Built with core values of creativity, sensitivity and sustainability, 
                every sector of this award-winning township project in Pune offers you 
                a luxurious lifestyle.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition duration-300">
                Download E-Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Overview;