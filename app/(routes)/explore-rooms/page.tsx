'use client';

import RoomCard from '@/app/components/RoomCard';

export default function ExploreRoomsPage() {
  return (
    <div className="bg-white">
      <section className="bg-gray-900 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Explore Our Rooms</h1>
          <p className="text-lg text-gray-300">Discover our design expertise across different spaces</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RoomCard href="/living-room" image="/placeholder.jpg" title="Living Room" description="Elegant gathering spaces" />
          <RoomCard href="/kitchen" image="/placeholder.jpg" title="Kitchen" description="Luxury culinary spaces" />
          <RoomCard href="/bedroom" image="/placeholder.jpg" title="Bedroom" description="Peaceful retreats" />
          <RoomCard href="/kids-room" image="/placeholder.jpg" title="Kids Room" description="Creative fun spaces" />
          <RoomCard href="/home-office" image="/placeholder.jpg" title="Home Office" description="Productive workspaces" />
          <RoomCard href="/dining" image="/placeholder.jpg" title="Dining" description="Sophisticated dining areas" />
        </div>
      </section>
    </div>
  );
}
