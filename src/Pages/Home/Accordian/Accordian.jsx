

const Accordian = () => {
    return (
        <div className="max-w-7xl mx-auto my-10">

        <div className="text-4xl text-center font-bold text-red-500 underline">

    <h1> Some Frequently Asked Questions?</h1>

        </div>

            <div className="collapse collapse-arrow bg-base-200 mt-10 ">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">What services does Equity Bd offer?</div>
  <div className="collapse-content">
    <p>Equity Bd specializes in residential, commercial, and industrial property sales, leasing, and property management. We also provide consultation services for real estate investments.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What types of properties can I find on Equity Bd?</div>
  <div className="collapse-content">
    <p>You can find a wide range of properties, including single-family homes, apartments, townhouses, commercial office spaces, and industrial warehouses.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Does Equity Bd assist with financing?</div>
  <div className="collapse-content">
    <p>Yes, we work with a number of financial institutions to help buyers secure mortgages and financing for their properties. Contact our team for personalized assistance.</p>
  </div>
</div>
        </div>
    );
};

export default Accordian;