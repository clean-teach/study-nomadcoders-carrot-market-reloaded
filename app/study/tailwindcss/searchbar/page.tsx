export default function SearchBar() {
    return (
        <main className="bg-gray-100 h-screen flex items-center justify-center p-5">
            <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col gap-2">
                <input type="text" placeholder="Search here..." className="w-full rounded-full h-10 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-4 focus:ring-1 focus:ring-offset-gray-400 transition-shadow placeholder:drop-shadow" />
                <button className="bg-black text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform outline-none">Search</button>
            </div>
        </main>
    );
}
