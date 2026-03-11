
function Contact() {
    return (
        <div className="max-w-[90%] lg:max-w-xl mx-auto my-16 font-jost">
            <form className="bg-white shadow-lg rounded-2xl p-8 space-y-5">

                <h1 className="text-center text-3xl font-bold text-gray-800">
                    Contact Us
                </h1>

                {/* Name */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Input your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500  transition"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Input your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        rows="4"
                        placeholder="Write your message..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    ></textarea>
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:opacity-90 transition shadow-md"
                >
                    Send Message
                </button>

            </form>
        </div>
    )
}

export default Contact