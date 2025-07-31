import React from 'react';

function Filter({ filters, setFilters }) {
  
 
 


  const categories = [
    'All', 'Sedan', 'Hatchback', 'Mini SUV', 'SUV', 'Compact SUV',
    'Sports', 'Electric', 'Luxury', 'Luxury SUV', 'Luxury Sedan', 'Electric SUV'
  ];
  const brands = [
    'All', 'Toyota', 'Hyundai', 'Honda', 'Nissan', 'Kia', 'Chevrolet', 'Ford',
    'Volkswagen', 'Suzuki', 'Renault', 'Jeep', 'Mazda', 'Subaru', 'Tesla',
    'BMW', 'Audi', 'Mercedes', 'Jaguar', 'Lexus', 'Porsche', 'Volvo'
  ];
  const tiers = ['All', 'Normal', 'Medium', 'Premium'];

  return (
    <div className="flex flex-wrap gap-4 justify-center p-6 rounded-xl shadow-inner">
   
      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1 text-gray-400">Category</label>
        <select
          className="p-2 border rounded hover:border-blue-500"
          value={filters.category}
          onChange={(e) => setFilters(f => ({ ...f, category: e.target.value }))}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

     
      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1  text-gray-400">Brand</label>
        <select
          className="p-2 border rounded hover:border-blue-500"
          value={filters.brand}
          onChange={(e) => setFilters(f => ({ ...f, brand: e.target.value }))}
        >
          {brands.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

     
      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1  text-gray-400">Tier</label>
        <select
          className="p-2 border rounded hover:border-blue-500"
          value={filters.tier}
          onChange={(e) => setFilters(f => ({ ...f, tier: e.target.value }))}
        >
          {tiers.map((tier) => (
            <option key={tier} value={tier}>{tier}</option>
          ))}
        </select>
      </div>

    
      <div className="flex flex-col justify-center">
        <label className="text-sm font-semibold mb-1  text-gray-400">Max Price</label>
        <div className="flex items-center gap-3">
          <input
            type="range"
            min="0"
            max="15000"
            step="10"
            value={filters.maxPrice}
            onChange={(e) => setFilters(f => ({ ...f, maxPrice: Number(e.target.value) }))}
            className="w-40"
          />
          <span className="text-sm text-gray-700 font-medium">₹{filters.maxPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default Filter;
