export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-32 pt-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">About <span className="text-orange-500">Elvenwood</span></h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Transforming homes into sanctuaries of elegance, comfort, and timeless design.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 font-serif">Our Story</h2>
        <p className="text-gray-600 mb-6">
          Elvenwood Interior was founded with a passion for transforming ordinary spaces into extraordinary homes. Our team of experienced designers combines creativity, craftsmanship, and attention to detail to deliver exceptional results.
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-8 mt-16 text-gray-900 font-serif">Our Values</h2>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-start"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white text-sm flex items-center justify-center mr-3">✓</span><span>Excellence in design and execution</span></li>
          <li className="flex items-start"><span className="mr-3 text-orange-500">✓</span><span>Client-focused approach</span></li>
          <li className="flex items-start"><span className="mr-3 text-orange-500">✓</span><span>Premium quality materials</span></li>
          <li className="flex items-start"><span className="mr-3 text-orange-500">✓</span><span>Professional and timely delivery</span></li>
        </ul>
      </section>
    </div>
  );
}
