import React, { useState } from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';

const SearchBar = ({ onSearch }) => {

    const [query, setQuery] = useState('')

    const handleSearch = () => {
        if(query.trim()){
            onSearch(query);
        }
    }

  return (
    <div className="flex items-center justify-between gap-4 mt-4">
      <Input
        className='bg-white text-black font-semibold rounded-full'
        type="text"
        value={query}
        placeholder="Search movies..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBar
