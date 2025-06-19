// // import { useState, useEffect } from 'react';
// // import { FaUser, FaComments, FaChevronLeft, FaChevronRight, FaAngleDoubleUp, FaSearch, FaComment } from 'react-icons/fa';

// // const Blog = () => {
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [subscribed, setSubscribed] = useState(false);
// //   const [activeCategory, setActiveCategory] = useState('All');
// //   const [filteredPosts, setFilteredPosts] = useState([]);
// //   const postsPerPage = 3;

// //   // All blog posts data - now tailored to sewing/tailoring
// //   const blogPosts = [
// //     {
// //       id: 1,
// //       title: "The Art of Hand-Stitched Suits: A Timeless Tradition",
// //       excerpt: "Discover why hand-stitched suits remain the gold standard in tailoring and how to identify true craftsmanship.",
// //       date: "15",
// //       month: "Jan",
// //       image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
// //       categories: ["Craftsmanship", "Suits"],
// //       comments: 12,
// //       tags: ["handmade", "suits", "craftsmanship"]
// //     },
// //     {
// //       id: 2,
// //       title: "Choosing the Perfect Fabric for Your Custom Shirt",
// //       excerpt: "A comprehensive guide to selecting the right fabric based on season, comfort, and durability needs.",
// //       date: "14",
// //       month: "Jan",
// //       image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
// //       categories: ["Fabrics", "Shirts"],
// //       comments: 8,
// //       tags: ["fabrics", "shirts", "materials"]
// //     },
// //     {
// //       id: 3,
// //       title: "Behind the Scenes: Crafting a Bespoke Suit",
// //       excerpt: "Step-by-step look at the 40+ hours of work that goes into creating a perfectly fitted bespoke suit.",
// //       date: "12",
// //       month: "Jan",
// //       image: "https://images.unsplash.com/photo-1596704017256-17961c0a4a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
// //       categories: ["Bespoke", "Suits"],
// //       comments: 15,
// //       tags: ["bespoke", "suits", "tailoring"]
// //     },
// //     {
// //       id: 4,
// //       title: "The History of Tailoring: From Medieval Times to Modern Day",
// //       excerpt: "How tailoring techniques have evolved over centuries to create the perfect fit.",
// //       date: "10",
// //       month: "Jan",
// //       image: "https://images.unsplash.com/photo-1556909114-44e1d3a9b588?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
// //       categories: ["History", "Techniques"],
// //       comments: 5,
// //       tags: ["history", "techniques", "evolution"]
// //     },
// //     {
// //       id: 5,
// //       title: "Essential Alterations Every Wardrobe Needs",
// //       excerpt: "Learn which simple alterations can transform off-the-rack clothing into perfectly fitted pieces.",
// //       date: "08",
// //       month: "Jan",
// //       image: "https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
// //       categories: ["Alterations", "Tips"],
// //       comments: 20,
// //       tags: ["alterations", "fitting", "wardrobe"]
// //     },
// //     {
// //       id: 6,
// //       title: "Summer Wedding Attire: Custom Suit Guide for Grooms",
// //       excerpt: "How to choose the right fabric, cut, and style for warm weather formal occasions.",
// //       date: "05",
// //       month: "Jan",
// //       image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
// //       categories: ["Wedding", "Suits"],
// //       comments: 7,
// //       tags: ["wedding", "formal", "summer"]
// //     },
// //     {
// //       id: 7,
// //       title: "The Tailor's Toolkit: Essential Equipment Explained",
// //       excerpt: "From shears to thimbles, understanding the tools that make quality tailoring possible.",
// //       date: "03",
// //       month: "Jan",
// //       image: "https://images.unsplash.com/photo-1583744946564-b52d01e2da64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
// //       categories: ["Tools", "Techniques"],
// //       comments: 9,
// //       tags: ["tools", "equipment", "sewing"]
// //     },
// //     {
// //       id: 8,
// //       title: "How to Care for Your Custom Tailored Clothing",
// //       excerpt: "Expert advice on maintaining the shape, color, and quality of your investment pieces.",
// //       date: "01",
// //       month: "Jan",
// //       image: "https://images.unsplash.com/photo-1595341595379-cf0f2a5d8369?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
// //       categories: ["Care", "Maintenance"],
// //       comments: 4,
// //       tags: ["care", "maintenance", "cleaning"]
// //     },
// //     {
// //       id: 9,
// //       title: "The Return of Vintage Tailoring Techniques",
// //       excerpt: "Why old-world tailoring methods are making a comeback in modern bespoke fashion.",
// //       date: "28",
// //       month: "Dec",
// //       image: "https://images.unsplash.com/photo-1590071089561-2085e3d21a35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
// //       categories: ["Vintage", "Techniques"],
// //       comments: 11,
// //       tags: ["vintage", "techniques", "traditional"]
// //     }
// //   ];

// //   const categories = [
// //     { name: "All", count: blogPosts.length },
// //     { name: "Suits", count: blogPosts.filter(post => post.categories.includes("Suits")).length },
// //     { name: "Shirts", count: blogPosts.filter(post => post.categories.includes("Shirts")).length },
// //     { name: "Bespoke", count: blogPosts.filter(post => post.categories.includes("Bespoke")).length },
// //     { name: "Fabrics", count: blogPosts.filter(post => post.categories.includes("Fabrics")).length },
// //     { name: "Techniques", count: blogPosts.filter(post => post.categories.includes("Techniques")).length },
// //     { name: "History", count: blogPosts.filter(post => post.categories.includes("History")).length }
// //   ];

// //   const recentPosts = [
// //     {
// //       title: "The Art of Hand-Stitched Suits",
// //       date: "January 15, 2023",
// //       image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
// //     },
// //     {
// //       title: "Choosing the Perfect Fabric",
// //       date: "January 12, 2023",
// //       image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
// //     },
// //     {
// //       title: "Essential Alterations Guide",
// //       date: "January 10, 2023",
// //       image: "https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
// //     },
// //     {
// //       title: "Tailor's Toolkit Explained",
// //       date: "January 8, 2023",
// //       image: "https://images.unsplash.com/photo-1583744946564-b52d01e2da64?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
// //     }
// //   ];

// //   const tags = ["bespoke", "suits", "shirts", "fabrics", "wool", "cotton", "silk", "alterations", "fitting", "measurements", "craftsmanship", "handmade", "vintage", "wedding", "formal"];

// //   const instagramPosts = [
// //     "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
// //     "https://images.unsplash.com/photo-1596704017256-17961c0a4a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
// //     "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
// //     "https://images.unsplash.com/photo-1602810319428-019690571b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
// //     "https://images.unsplash.com/photo-1583744946564-b52d01e2da64?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
// //     "https://images.unsplash.com/photo-1590071089561-2085e3d21a35?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
// //   ];

// //   // Filter posts based on search query and active category
// //   useEffect(() => {
// //     let result = [...blogPosts];
    
// //     // Filter by search query
// //     if (searchQuery) {
// //       const query = searchQuery.toLowerCase();
// //       result = result.filter(post => 
// //         post.title.toLowerCase().includes(query) || 
// //         post.excerpt.toLowerCase().includes(query) ||
// //         post.categories.some(cat => cat.toLowerCase().includes(query)) ||
// //         post.tags.some(tag => tag.toLowerCase().includes(query))
// //       );
// //     }
    
// //     // Filter by category
// //     if (activeCategory !== 'All') {
// //       result = result.filter(post => post.categories.includes(activeCategory));
// //     }
    
// //     setFilteredPosts(result);
// //     setCurrentPage(1); // Reset to first page when filters change
// //   }, [searchQuery, activeCategory]);

// //   // Handle search form submission
// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     // The useEffect will handle the filtering
// //   };

// //   // Handle category click
// //   const handleCategoryClick = (category) => {
// //     setActiveCategory(category);
// //   };

// //   // Handle subscribe form submission
// //   const handleSubscribe = (e) => {
// //     e.preventDefault();
// //     setSubscribed(true);
// //     setEmail('');
// //     setTimeout(() => setSubscribed(false), 3000);
// //   };

// //   // Scroll to top function
// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //   };

// //   // Get current posts for pagination
// //   const indexOfLastPost = currentPage * postsPerPage;
// //   const indexOfFirstPost = indexOfLastPost - postsPerPage;
// //   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
// //   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

// //   return (
// //     <div className="bg-white text-gray-900">
      
// //       {/* Blog Header */}
// //       <header className="flex bg-gradient-to-b from-[#0a1a38] to-[#0a1a38] h-[320px]">
// //         <section
// //             className="relative flex flex-col md:flex-row flex-1 p-8 md:p-16 lg:p-24 justify-center items-center rounded-lg overflow-hidden"
// //             style={{
// //             backgroundImage:
// //                 "url('https://images.unsplash.com/photo-1590071089561-2085e3d21a35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
// //             backgroundSize: 'cover',
// //             backgroundPosition: 'center',
// //             }}
// //         >
// //             <div className="absolute inset-0 bg-secondary bg-opacity-90"></div>

// //             <div className="relative z-10 flex-1 max-w-[600px] text-white text-center md:text-left mb-8 md:mb-0 md:mr-8 ml-64 mt-24">
// //             <img
// //                 src="https://preview.colorlib.com/theme/tailor/assets/img/hero/hero-icon.png.webp"
// //                 alt="Rotating Icon"
// //                 className={`absolute -top-10 md:-top-28 left-1/2 -translate-x-1/2 md:left-0 w-22 h-22 rounded-full} ml-10`}
// //                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/000000/FFFFFF?text=Icon'; }}
// //             />
// //             <div>
// //                 <h1 className="text-[52px] md:text-[50px] font-semibold leading-[1.1] mb-6 mt-16 md:mt-0" style={{fontFamily:'Josefin Sans'}}>
// //                 Tailor's Blog
// //                 </h1>
// //                 <p className="text-lg">Expert insights on tailoring, fabrics, and timeless style</p>
// //             </div>
// //             </div>

// //             <div className={`relative z-10 flex-1 flex justify-center items-center} mt-72 left-24`}>
// //             <img
// //                 alt="Tailor measuring fabric on a mannequin"
// //                 className="w-full h-[400px] object-cover rounded-md shadow-xl max-h-[100vh] hover:shadow-2xl transition-shadow max-w-[1200px]"
// //                 src="https://preview.colorlib.com/theme/tailor/assets/img/hero/h1_hero1.png.webp"
// //                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x800/E0E0E0/333333?text=Tailor+At+Work'; }}
// //             />
// //             </div>
// //         </section>
// //         </header>

// //       {/* Main Content Area */}
// //       <div className="max-w-[full] ml-40 mr-40 px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-10">
// //         <main className="flex-1 lg:col-span-8 space-y-10">
// //           {/* Blog posts */}
// //           {currentPosts.length > 0 ? (
// //             currentPosts.map((post) => (
// //               <article key={post.id} className="bg-white shadow-sm rounded-md overflow-hidden">
// //                 <div className="relative">
// //                   <img 
// //                     alt={post.title} 
// //                     className="w-full h-96 object-cover" 
// //                     src={post.image}
// //                   />
// //                   <div className="absolute bottom-6 left-6 bg-red-600 text-white rounded-md w-16 h-20 flex flex-col items-center justify-center font-semibold">
// //                     <span className="text-2xl leading-none">{post.date}</span>
// //                     <span className="text-xs leading-none">{post.month}</span>
// //                   </div>
// //                 </div>
// //                 <div className="p-6">
// //                   <h2 className="font-bold text-lg text-gray-900 mb-2">{post.title}</h2>
// //                   <p className="text-gray-700 text-sm mb-6">{post.excerpt}</p>
// //                   <div className="flex items-center text-gray-400 text-xs space-x-3">
// //                     <div className="flex items-center space-x-1">
// //                       <FaUser className="text-xs" />
// //                       <span>{post.categories.join(", ")}</span>
// //                     </div>
// //                     <span>|</span>
// //                     <div className="flex items-center space-x-1">
// //                       <FaComments className="text-xs" />
// //                       <span>{post.comments} Comments</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </article>
// //             ))
// //           ) : (
// //             <div className="text-center py-10">
// //               <p className="text-gray-500">No blog posts found matching your criteria.</p>
// //             </div>
// //           )}

// //           {/* Pagination */}
// //           {filteredPosts.length > postsPerPage && (
// //             <nav aria-label="Pagination" className="flex justify-center items-center space-x-2 mt-20 text-gray-400 text-sm select-none">
// //               <button 
// //                 aria-label="Previous" 
// //                 className={`border border-gray-200 rounded px-3 py-2 ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'hover:text-gray-600'}`}
// //                 onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
// //                 disabled={currentPage === 1}
// //               >
// //                 <FaChevronLeft />
// //               </button>
              
// //               {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
// //                 <button 
// //                   key={page}
// //                   aria-current={currentPage === page ? "page" : undefined}
// //                   className={`border border-gray-200 rounded px-4 py-2 ${currentPage === page ? 'bg-white text-gray-600 font-semibold' : 'hover:bg-gray-50 hover:text-gray-600'}`}
// //                   onClick={() => setCurrentPage(page)}
// //                 >
// //                   {page}
// //                 </button>
// //               ))}
              
// //               <button 
// //                 aria-label="Next" 
// //                 className={`border border-gray-200 rounded px-3 py-2 ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'hover:text-gray-600'}`}
// //                 onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
// //                 disabled={currentPage === totalPages}
// //               >
// //                 <FaChevronRight />
// //               </button>
// //             </nav>
// //           )}
// //         </main>

// //         {/* Sidebar */}
// //         <aside className="w-full max-w-md lg:max-w-sm space-y-8 lg:space-y-10">
// //           {/* Search */}
// //           <div className="bg-[#faf9ff] p-6 rounded-md">
// //             <form className="flex" onSubmit={handleSearch}>
// //               <input 
// //                 className="flex-grow px-4 py-3 text-xs text-gray-700 border border-transparent focus:outline-none" 
// //                 placeholder="Search posts..." 
// //                 type="text"
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //               />
// //               <button className="bg-red-600 text-white px-6 py-3 text-xs font-semibold" type="submit">
// //                 <FaSearch />
// //               </button>
// //             </form>
// //           </div>

// //           {/* Categories */}
// //           <div className="bg-[#faf9ff] p-6 rounded-md">
// //             <h3 className="font-semibold text-gray-900 mb-4">Tailoring Categories</h3>
// //             <ul className="text-xs text-gray-700 space-y-4">
// //               {categories.map((category, index) => (
// //                 <li 
// //                   key={index} 
// //                   className={`border-b border-gray-200 pb-2 flex justify-between cursor-pointer ${activeCategory === category.name ? 'text-red-600 font-semibold' : ''}`}
// //                   onClick={() => handleCategoryClick(category.name)}
// //                 >
// //                   <span>{category.name}</span>
// //                   <span>({category.count})</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Recent Posts */}
// //           <section className="bg-[#faf8ff] p-6 rounded-md">
// //             <h3 className="font-semibold text-gray-900 mb-6">Recent Articles</h3>
// //             <ul className="flex flex-col gap-5">
// //               {recentPosts.map((post, index) => (
// //                 <li key={index} className="flex gap-4">
// //                   <img 
// //                     alt={post.title} 
// //                     className="w-14 h-14 object-cover rounded" 
// //                     src={post.image}
// //                   />
// //                   <div>
// //                     <p className="font-semibold text-sm text-gray-900 leading-tight">{post.title}</p>
// //                     <p className="text-xs text-gray-600 mt-1">{post.date}</p>
// //                   </div>
// //                 </li>
// //               ))}
// //             </ul>
// //           </section>

// //           {/* Tags */}
// //           <section className="bg-[#faf8ff] p-6 rounded-md">
// //             <h3 className="font-semibold text-base mb-4 border-b border-gray-200 pb-2">Tailoring Topics</h3>
// //             <div className="flex flex-wrap gap-2">
// //               {tags.map((tag, index) => (
// //                 <button 
// //                   key={index} 
// //                   className={`text-xs text-gray-600 border border-gray-300 rounded px-3 py-1 hover:bg-gray-100 ${searchQuery === tag ? 'bg-gray-100 font-semibold' : ''}`}
// //                   onClick={() => {
// //                     setSearchQuery(tag);
// //                     setActiveCategory('All');
// //                   }}
// //                 >
// //                   {tag}
// //                 </button>
// //               ))}
// //             </div>
// //           </section>

// //           {/* Instagram Feed */}
// //           <section className="bg-[#faf8ff] p-6 rounded-md">
// //             <h3 className="font-semibold text-base mb-4 border-b border-gray-200 pb-2">Workshop Gallery</h3>
// //             <div className="grid grid-cols-3 gap-3">
// //               {instagramPosts.map((post, index) => (
// //                 <img 
// //                   key={index} 
// //                   alt={`Tailoring work ${index + 1}`} 
// //                   className="w-full h-20 object-cover rounded-sm" 
// //                   src={post}
// //                 />
// //               ))}
// //             </div>
// //           </section>

// //           {/* Newsletter */}
// //           <section className="bg-[#faf8ff] p-6 rounded-md">
// //             <h3 className="font-semibold text-sm mb-4">Tailoring Tips Newsletter</h3>
// //             <hr className="border-gray-300 mb-4"/>
// //             {subscribed ? (
// //               <div className="text-green-600 text-sm text-center py-4">
// //                 Thank you for subscribing to our tailoring newsletter!
// //               </div>
// //             ) : (
// //               <form className="space-y-4" onSubmit={handleSubscribe}>
// //                 <input 
// //                   className="w-full border border-gray-300 rounded-md px-4 py-2 text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600" 
// //                   placeholder="Enter email" 
// //                   type="email" 
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   required
// //                 />
// //                 <button 
// //                   className="w-full border border-red-600 text-red-600 text-xs py-3 rounded-md font-semibold hover:bg-red-600 hover:text-white transition" 
// //                   type="submit"
// //                 >
// //                   SUBSCRIBE
// //                 </button>
// //               </form>
// //             )}
// //           </section>
// //         </aside>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Blog;





// // src/pages/Blog.jsx
// import React from 'react';
// import { FaCalendarAlt, FaUser, FaComment } from 'react-icons/fa';

// const Blog = () => {
//   const articles = [
//     {
//       title: "The Art of Hand-Stitched Suits",
//       excerpt: "Exploring why hand-stitching remains the gold standard in bespoke tailoring and how to identify true craftsmanship.",
//       date: "June 15, 2023",
//       author: "Marco Fellini",
//       comments: 12,
//       image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//     },
//     {
//       title: "Choosing Fabrics for Different Seasons",
//       excerpt: "A guide to selecting the perfect fabric weight and composition for year-round comfort and style.",
//       date: "May 28, 2023",
//       author: "Sophia Ricci",
//       comments: 8,
//       image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//     },
//     {
//       title: "The Tailor's Essential Toolkit",
//       excerpt: "Discover the specialized tools that enable our tailors to create garments of exceptional quality and fit.",
//       date: "April 10, 2023",
//       author: "Luca Bianchi",
//       comments: 5,
//       image: "https://images.unsplash.com/photo-1619470149079-8a526f6e409b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     }
//   ];

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative h-96 bg-gradient-to-r from-amber-700 to-amber-800 flex items-center justify-center text-center text-white">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590071089561-2085e3d21a35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
//         <div className="relative z-10">
//           <h1 className="text-5xl font-bold mb-4 font-serif">Tailor's Journal</h1>
//           <p className="text-xl max-w-2xl mx-auto">
//             Insights on craftsmanship, fabric selection, and timeless style from our master tailors
//           </p>
//         </div>
//       </section>

//       {/* Articles Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {articles.map((article, index) => (
//               <article key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
//                 <img 
//                   src={article.image} 
//                   alt={article.title} 
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-6">
//                   <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
//                     <span className="flex items-center">
//                       <FaCalendarAlt className="mr-2" />
//                       {article.date}
//                     </span>
//                     <span className="flex items-center">
//                       <FaUser className="mr-2" />
//                       {article.author}
//                     </span>
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-800 mb-3">{article.title}</h2>
//                   <p className="text-gray-600 mb-4">{article.excerpt}</p>
//                   <div className="flex items-center text-gray-500">
//                     <FaComment className="mr-2" />
//                     {article.comments} comments
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="py-16 bg-amber-50">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4 font-serif">Stay Updated</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
//             Subscribe to our newsletter for tailoring tips, style advice, and exclusive offers
//           </p>
//           <form className="max-w-md mx-auto flex">
//             <input 
//               type="email" 
//               placeholder="Your email address" 
//               className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
//             />
//             <button 
//               type="submit" 
//               className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-r-lg font-medium transition-colors"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Blog;



// src/pages/Blog.jsx
import React from 'react';
import { FaCalendarAlt, FaUser, FaComment, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Blog = () => {
  const articles = [
    {
      title: "The Art of Hand-Stitched Suits",
      excerpt: "Exploring why hand-stitching remains the gold standard in bespoke tailoring and how to identify true craftsmanship.",
      date: "June 15, 2023",
      author: "Marco Fellini",
      comments: 12,
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Choosing Fabrics for Different Seasons",
      excerpt: "A guide to selecting the perfect fabric weight and composition for year-round comfort and style.",
      date: "May 28, 2023",
      author: "Sophia Ricci",
      comments: 8,
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "The Tailor's Essential Toolkit",
      excerpt: "Discover the specialized tools that enable our tailors to create garments of exceptional quality and fit.",
      date: "April 10, 2023",
      author: "Luca Bianchi",
      comments: 5,
      image: "https://images.unsplash.com/photo-1619470149079-8a526f6e409b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-indigo-700 to-indigo-800 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590071089561-2085e3d21a35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
        <motion.div 
          className="relative z-10"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold mb-4 font-serif">Tailor's Journal</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Insights on craftsmanship, fabric selection, and timeless style from our master tailors
          </p>
        </motion.div>
      </section>

      {/* Articles Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
          >
            {articles.map((article, index) => (
              <motion.article 
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -10 }}
              >
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      {article.date}
                    </span>
                    <span className="flex items-center">
                      <FaUser className="mr-2" />
                      {article.author}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">{article.title}</h2>
                  <p className="text-gray-600 mb-6">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-500">
                      <FaComment className="mr-2" />
                      {article.comments} comments
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-800 flex items-center">
                      Read More <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-serif">Stay Updated</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for tailoring tips, style advice, and exclusive offers
            </p>
            <form className="max-w-md mx-auto flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <motion.button 
                type="submit" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-r-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;