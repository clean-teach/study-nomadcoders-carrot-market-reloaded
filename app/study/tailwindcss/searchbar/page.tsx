export default function SearchBar() {
    return (
        <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
            <div className="bg-gradient-to-tr from-cyan-100 to-blue-100 w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col md:flex-row gap-2 *:outline-none ring ring-transparent transition-shadow has-[:invalid]:ring-red-200">
                <input type="text" placeholder="Email address" required className="w-full rounded-full h-10 bg-white pl-5 ring ring-transparent focus:ring-green-500 focus:ring-offset-4 focus:ring-1 focus:ring-offset-gray-50 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer" />
                <span className="text-red-500 font-medium hidden peer-invalid:block">Email is required</span>
                <button className="bg-green-500 text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform md:px-10 min-w-36 peer-invalid:bg-red-500 peer-required:bg-green-500">Log in</button>
            </div>
        </main>
    );
}
