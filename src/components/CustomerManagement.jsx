import React from 'react'
import Header from './Header'
import Footer from './Footer'

const CustomerManagement = () => {
  return (
    
   <>
   <Header/>

   <div className="main-container p-0">
    <section id="why-us" className="xl bg-gradient-body">
      <div className="container">
        <div className="row v-center">
          <div className="col-lg-5">
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Customer-Relationship-Management4-1.png"
              alt=""
              className="rounded rellax"
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <h2 className="mb-30">
            Know everything about your customers in just one click!
            </h2>
            <p className="mb-30">
            In-built Customer Management Software that helps your earn customer loyalty, Regulate customer retention, Synced customer information, Track customer behaviour and many more
            </p>
            <a href="#x" className="btn btn-primary pill mr-5">
        
              <span>Book a free demo</span>
            </a>
          </div>
          {/* / column */}
        </div>
        {/* / row */}
      </div>
      {/* / container */}
    </section>
    <div className="container py-5">
      <h2 className="text-center">
      Discover what Ciferon can do for your customers
      </h2>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card " style={{ backgroundColor: "#faf2eb" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Track-customer-behaviour-3.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">
              Track customer behaviour
              </h6>
              <p className="card-text">
              The customer wants to place an order, but you are clueless about what they often get. Here Ciferon's order tracking module comes in handy, On the billing tab, you can quickly review the order history of your customer.
               Give your biller additional information for a customized experience that will increase client satisfaction.
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ backgroundColor: "#faf2eb" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Synced-customer-information-3.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">Synced customer information</h6>
              <p className="card-text">
              Flawless customer understanding! Information captured on the POS is immediately linked to the cloud. Get information instantly, including address, email, birthdays, anniversaries, and more, in addition to names and numbers. Gain a thorough grasp of your clients with ease!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ backgroundColor: "#faf2eb" }}>
            <img
              src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Regulate-customer-retention-1.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">Regulate customer retention</h6>
              <p className="card-text">
              Use customized SMS to increase customer interaction directly from the Ciferon Dashboard! Customize messages according to birthdays, anniversaries, purchasing history, and other factors. To entice your devoted consumers to return, send them exclusive deals or discount codes.
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ backgroundColor: "#faf2eb" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Customer-Feedbacks-1.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">Customer Feedbacks</h6>
              <p className="card-text">
              With Ciferon's Feedback Management System, you can find out what customers truly think about your restaurant and services! Gather frank feedback about your staff, food, and service by using a tablet or smartphone app, QR codes, or SMS links.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <section id="features" className="xl">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-80">
          Much more than just
          a CRM software
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row text-center">
            
        <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-qrcode feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Online Orders</h5>
                <p style={{ color: '#666' }} className="feature-description">Receive online orders, handle your digital menu, indicate when food is ready, process payments, and track revenue—all in one place without switching between multiple screens.</p>
            </div>

            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Billing & Kot</h5>
                <p style={{ color: '#666' }} className="feature-description">Ciferon's restaurant POS makes it easy to take orders, create bills, and generate KOT. You can accept payments, split bills, merge tables, and apply discounts and coupons effortlessly.</p>
            </div>

            

            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book-open feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Inventory Management</h5>
                <p style={{ color: '#666' }} className="feature-description">Smartly manage your inventory with instant low-stock alerts, item-wise auto-deduct, create daily closing reports and much more</p>
            </div>
            
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-file-invoice feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Reports & Analytics</h5>
                <p style={{ color: '#666' }} className="feature-description">Receive instant reports on your owner’s app & WhatsApp for day-end sales, inventory, staff activities, and other vital business insights.</p>
            </div>
            

            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Menu Management</h5>
                <p style={{ color: '#666' }} className="feature-description">Personalize your restaurant menu to make it better for customers. Add exciting extras, special offers, unique menus, and dynamic pricing options.</p>
            </div>
           
        </div>
    </div>
        {/* / row */}
      </div>
      {/* / container */}
    </section>
    {/* / features */}

    <div className="container">
  <div className="row v-center">
    <div className="col-lg-5">
      <img
        src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/1652030916333.jpeg"
        alt=""
        className="rounded rellax text-center"
        data-rellax-speed={2}
        data-rellax-percentage="0.5"
        style={{ width: 313, height: 313 }}
      />
    </div>
    {/* / column */}
    <div className="col-lg-7 tablet-lg-top-30">
      <p className="mb-15 mt-3">  {/* Reduced the bottom margin */}
        "I've been a Ciferon user for two years, and it has transformed how
        we manage all our Kamat Restaurants locations, automating operations
        from top to bottom. The comprehensive integrations and the dedicated
        support team have been game-changers. I highly recommend Ciferon to
        any restaurant looking to upgrade their operations."​
      </p>
      <h3 className="">Dr. Vikram Kamat </h3>
      <h3>Founder &amp; Chairman, VITS Kamat Group</h3>
    </div>
    {/* / column */}
  </div>
  {/* / row */}
</div>


    {/* / container */}
    <div className="container relative mt-3">
      <div className="row v-center">
        <div className="col-lg-6 tablet-lg-top-45">
          <img
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/leads.png"
            
            style={{ width: 500, height: 520 }}
            alt=""
          />
        </div>
        {/* / column */}
        <div className="col-lg-6">
          <div className="promo-box p-50">
            <h4 className="text-center mb-50">
              Get a personalized free demo by our experts
            </h4>
            <form className="needs-validation" id="form-validation3" noValidate="novalidate">
  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="contact-name3"
          name="inputName3"
          placeholder="Full Name"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          id="contact-email3"
          name="inputEmail3"
          placeholder="Mobile Number"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="contact-email3"
          name="inputEmail3"
          placeholder="Email"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="contact-email3"
          name="inputEmail3"
          placeholder="City"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <div className="col-12">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="contact-subject3"
          name="inputSubject3"
          placeholder="Outlet Name"
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    {/* Outlet Type and Outlet Status in one row */}
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="contact-outlet-type"
          name="inputOutletType"
          placeholder="Outlet Type"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="contact-outlet-status"
          name="inputOutletStatus"
          placeholder="Outlet Status"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <button type="submit" className="btn btn-primary btn-submit">
      Submit
    </button>
  </div>
  {/* / row */}
</form>

            {/* / form-group */}
          </div>
          {/* / promo-box */}
        </div>
        {/* / column */}
      </div>
      {/* / row */}
    </div>
    {/* / container */}
    <section id="faq" className="xl">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-80">Frequently Asked Questions</h2>
        </div>
        {/* / text-center */}
        <div className="row v-center">
          <div className="col-lg-8 tablet-lg-top-30">
            <div
              className="accordion minimal-accordion"
              id="minimal-accordionExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="minimal-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#minimal-collapseOne"
                    aria-expanded="true"
                    aria-controls="minimal-collapseOne"
                  >
                    I am switching from another POS, can I upload my customer data?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="minimal-headingOne"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                  It’s a breeze! Just upload your Excel file in the specified format on Ciferon, and voila! Your entire customer data gets updated effortlessly. Easy peasy!
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="minimal-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#minimal-collapseTwo"
                    aria-expanded="false"
                    aria-controls="minimal-collapseTwo"
                  >
                    Can I send loyalty points to customer from Ciferon?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingTwo"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                  It’s a piece of cake! Design your loyalty program, gather customer numbers, and with just one click, you can effortlessly add or redeem customer points. Simple and quick!
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="minimal-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#minimal-collapseThree"
                    aria-expanded="false"
                    aria-controls="minimal-collapseThree"
                  >
                  Can I see customer behaviour?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingThree"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                  With Ciferon POS, you get the full scoop on your customers – from their latest visit details to their preferences, dislikes, average spending, and much more!
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="minimal-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#minimal-collapseThree"
                    aria-expanded="false"
                    aria-controls="minimal-collapseThree"
                  >
                  Can I add the customer GST number?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingThree"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                  Yes.
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="minimal-headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#minimal-collapseThree"
                    aria-expanded="false"
                    aria-controls="minimal-collapseThree"
                  >
                   Can I download the customer data?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingThree"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                  Feel free to download customer data as frequently as you’d like—it’s absolutely free!
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="minimal-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#minimal-collapseThree"
                    aria-expanded="false"
                    aria-controls="minimal-collapseThree"
                  >
                 Can I use the same customer data across all my chain outlets?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingThree"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                  Yes.
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              

             

            </div>
            {/* / accordion */}
          </div>
          {/* / column */}
        </div>
        {/* / row */}
      </div>
      {/* / container */}
    </section>
    {/* / faq */}
  </div>

   <Footer/>
   </>

  )
}

export default CustomerManagement