

const Contact = () => {
    return (
        <div>
           <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/F3GWZdc/2824345.jpg)",
  }}>
  
        </div>

        <div className="text-4xl font-bold text-center underline text-red-600">
            <h1>Contact Us</h1>
        </div>

        <table className="table mt-20 max-w-7xl mx-auto mb-20 ">
          {/* head */}
          <thead >
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Email</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Managing Director</td>
              <td>cygan@gmail.com</td>
              <td>+8801234</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Chief Executive Officer </td>
              <td>hart22@gmail.com</td>
              <td>+8801235</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Manager</td>
              <td>brice1981@gmail.com</td>
              <td>+8801236</td>
            </tr>
          </tbody>
        </table>



        </div>
    );
};

export default Contact;