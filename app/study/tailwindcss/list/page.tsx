export default function ListComponent() {
    return (
        <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-10 flex-col gap-4">
            <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col gap-4">
                {["Nico", "Me", "You", "YourSelf", ""].map((person, index) => (
                    <div key={index} className="flex items-center gap-3 p-2.5 rounded-xl even:bg-cyan-100 odd:bg-gray-100 border-b-2 last:border-b-0 group">
                        <div className="size-10 bg-blue-400 rounded-full" />
                        <span className="text-lg font-medium empty:w-40  empty:h-5 empty:rounded-full empty:bg-gray-400 empty:animate-pulse group-hover:text-red-500">{person}</span>
                        <div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full animate-bounce relative">
                            <span>{index}</span>
                            <div className="size-6 bg-red-500 rounded-full absolute animate-ping" />
                        </div>
                        <div className="animate-spin">⏳</div>
                    </div>
                ))}
            </div>
            <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col gap-4">
                <h2>로딩중 스캘래톤 UI</h2>
                {["Nico", "Me", "You", "YourSelf"].map((person, index) => (
                    <div key={index} className="flex items-center gap-3 p-2.5 rounded-xl *:animate-pulse">
                        <div className="size-10 bg-blue-400 rounded-full" />
                        <div className="h-4 w-40 rounded-full bg-gray-400"></div>
                        <div className="h-4 w-20 rounded-full bg-gray-400"></div>
                    </div>
                ))}
            </div>
            <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col gap-4 group">
                <h2>자식 요소 focus 시, 부모요소에 포함된 다른 자식 요소 Styling</h2>
                <input type="text" placeholder="Write your Email" className="bg-gray-100 w-full" />
                <span className="group-focus-within:block hidden text-bigger-hello">Make Sure it is a valid email...</span>
                <button className="btn">Submit</button>
            </div>
        </main>
    );
}
