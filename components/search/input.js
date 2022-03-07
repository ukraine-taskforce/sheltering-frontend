export default function Input() {
    return (
        <div className="my-6">
            <div className="mt-1 relative flex items-center">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search for a shelter"
                    className="w-96 px-6 py-3 shadow-sm text-gray-600 focus:ring-yellow-400 focus:border-yellow-400 block w-full sm:text-lg border-gray-300 rounded-full placeholder-gray-400"
                />
            </div>
        </div>
    )
}
