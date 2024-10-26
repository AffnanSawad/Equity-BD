

const Review = () => {
    return (
        <div>

            <div className="">

         <h1 className="text-4xl font-bold text-red-700 mx-10 my-5">Give Your Feedback!</h1>

            </div>


          
<form className="mx-10 my-10">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
        <button
          type="submit"
          className="mt-8 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>


        </div>
    );
};

export default Review;