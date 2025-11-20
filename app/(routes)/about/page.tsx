export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gray-900 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">About Elvenwood</h1>
          <p className="text-lg text-gray-300">Transforming homes with luxury interior design</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-gray-600 mb-6">
          Elvenwood Interior was founded with a passion for transforming ordinary spaces into extraordinary homes. Our team of experienced designers combines creativity, craftsmanship, and attention to detail to deliver exceptional results.
        </p>

        <h2 className="text-3xl font-bold mb-6 mt-12">Our Values</h2>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-start"><span className="mr-3 text-blue-600">✓</span><span>Excellence in design and execution</span></li>
          <li className="flex items-start"><span className="mr-3 text-blue-600">✓</span><span>Client-focused approach</span></li>
          <li className="flex items-start"><span className="mr-3 text-blue-600">✓</span><span>Premium quality materials</span></li>
          <li className="flex items-start"><span className="mr-3 text-blue-600">✓</span><span>Professional and timely delivery</span></li>
        </ul>
      </section>
    </div>
  );
}
