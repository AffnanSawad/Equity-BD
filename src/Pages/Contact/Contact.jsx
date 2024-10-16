

const Contact = () => {
    return (
        <div>
     <img src="https://i.ibb.co.com/NLrS0QJ/Contact-Us-1.jpg" alt="" />

      

        <table className="table mt-20 max-w-7xl mx-auto mb-20 ">
          {/* head */}
          <thead >
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Email</th>
             
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Managing Director</td>
              <td>cygan@gmail.com</td>
             
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Chief Executive Officer </td>
              <td>hart22@gmail.com</td>
            
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Manager</td>
              <td>brice1981@gmail.com</td>
            
            </tr>
          </tbody>
        </table>



        </div>
    );
};

export default Contact;