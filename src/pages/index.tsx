import { regions } from '../data/regions';

export default function Home() {
  const featuredCompanies = regions
    .flatMap(region => region.companies)
    .filter(company => company.homepageFeature);

  console.log('Featured Companies:', featuredCompanies);

  return (
    <div>
      {/* ... existing content ... */}

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Companies</h2>
          
          {featuredCompanies.length === 0 ? (
            <p>No featured companies found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCompanies.map((company) => (
                <div 
                  key={company.slug}
                  className="border p-4 rounded"
                >
                  <h3>{company.name}</h3>
                  <p>{company.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ... rest of the content ... */}
    </div>
  );
} 