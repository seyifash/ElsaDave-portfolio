import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [details, setDetails] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    message: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setDetails((prevState) => (
      {...prevState,
      [name] : value}
    )) 
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(details);

    // Send email using EmailJS
    emailjs.send(
      "service_37v1a4c", 
      "template_b0qa3xh", 
      {
        firstName: details.firstName,
        email: details.email,
        phoneNumber: details.phoneNumber,
        message: details.message
      },
      "9GVNd5rDx3GMXKzLX" 
    )
    .then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Your details have been sent successfully!");
      },
      (error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send details. Please try again.");
      }
    );
    setDetails({
    firstName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });
  }


  return (
    <div className="min-h-[100vh] md:min-h-[50vh] flex flex-col items-start bg-[#002651] py-[2em] px-4 py-[2em] md:px-[2em] xl:px-[4em] md:py-[3em]">
      <h3 className="h3-bold uppercase fonts w-[100%] md:w-[90%]">Let’s Build Clarity, Structure & Growth Together.</h3>
      <div className="flex flex-col md:flex-row w-full gap-20 md:mt-10">
        <div className="w-full md:w-[40%] flex flex-col gap-y-4 md:gap-y-8">
          <p className="text-white text-xs md:text-sm fonts text-left font-extralight flex gap-2">
            <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7031 0.40625H3.29688C2.57191 0.407026 1.87686 0.69536 1.36424 1.20799C0.85161 1.72061 0.563276 2.41566 0.5625 3.14062V14.8594C0.563276 15.5843 0.85161 16.2794 1.36424 16.792C1.87686 17.3046 2.57191 17.593 3.29688 17.5938H19.7031C20.4281 17.593 21.1231 17.3046 21.6358 16.792C22.1484 16.2794 22.4367 15.5843 22.4375 14.8594V3.14062C22.4367 2.41566 22.1484 1.72061 21.6358 1.20799C21.1231 0.69536 20.4281 0.407026 19.7031 0.40625ZM19.0107 4.9292L11.9795 10.3979C11.8424 10.5045 11.6737 10.5624 11.5 10.5624C11.3263 10.5624 11.1576 10.5045 11.0205 10.3979L3.98926 4.9292C3.90665 4.86681 3.83726 4.78863 3.78512 4.6992C3.73299 4.60976 3.69915 4.51086 3.68557 4.40823C3.67199 4.30561 3.67894 4.20131 3.70602 4.10139C3.7331 4.00147 3.77977 3.90794 3.84331 3.82621C3.90685 3.74449 3.986 3.67621 4.07616 3.62534C4.16632 3.57447 4.26569 3.54202 4.3685 3.52989C4.4713 3.51775 4.5755 3.52617 4.67502 3.55465C4.77455 3.58314 4.86742 3.63111 4.94824 3.6958L11.5 8.7915L18.0518 3.6958C18.2156 3.57208 18.4215 3.51782 18.6251 3.54475C18.8286 3.57168 19.0133 3.67764 19.1393 3.83971C19.2653 4.00178 19.3225 4.20694 19.2984 4.41082C19.2744 4.6147 19.171 4.80092 19.0107 4.9292Z" fill="white"/>
            </svg>
            <Link className="!text-xs md:!text-sm fonts" to="#">
               hello@elsadaveconsulting.com
            </Link>
            </p>
          <p className="text-white text-xs  md:text-sm fonts text-left font-extralight flex gap-2">
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8.05C18 6.99286 17.7672 5.94607 17.3149 4.9694C16.8626 3.99273 16.1997 3.1053 15.364 2.35779C14.5282 1.61028 13.5361 1.01732 12.4442 0.61277C11.3522 0.208219 10.1819 0 9 0C7.8181 0 6.64778 0.208219 5.55585 0.61277C4.46392 1.01732 3.47177 1.61028 2.63604 2.35779C1.80031 3.1053 1.13738 3.99273 0.685084 4.9694C0.232792 5.94607 -1.76116e-08 6.99286 0 8.05C0 9.64505 0.525857 11.1286 1.42071 12.3798H1.41043L9 23L16.5896 12.3798H16.5806C17.5075 11.0878 18.0001 9.58505 18 8.05ZM9 11.5C7.97702 11.5 6.99594 11.1365 6.27259 10.4895C5.54923 9.84252 5.14286 8.965 5.14286 8.05C5.14286 7.135 5.54923 6.25748 6.27259 5.61048C6.99594 4.96348 7.97702 4.6 9 4.6C10.023 4.6 11.0041 4.96348 11.7274 5.61048C12.4508 6.25748 12.8571 7.135 12.8571 8.05C12.8571 8.965 12.4508 9.84252 11.7274 10.4895C11.0041 11.1365 10.023 11.5 9 11.5Z" fill="white"/>
            </svg>

            <Link className="!text-xs md:!text-sm fonts" to="#">Lagos, Nigeria</Link>
            </p>
          <p className="text-white text-xs md:text-sm fonts text-left font-extralight flex gap-2">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.33 17.0349C19.2044 17.598 18.893 18.1023 18.446 18.4669C17.9576 18.9623 17.3757 19.3556 16.734 19.6241C16.0923 19.8926 15.4036 20.0309 14.708 20.0309H14.383C12.923 19.9517 11.4935 19.5821 10.178 18.9439H10.168C9.863 18.8019 9.548 18.6599 9.243 18.4869C7.70741 17.6259 6.29894 16.5557 5.058 15.3069C3.44756 13.7943 2.12601 12.001 1.158 10.0149C0.643551 8.92649 0.300175 7.76515 0.140002 6.57194C-0.095536 5.32295 0.04615 4.03211 0.547002 2.86394C0.863197 2.33692 1.24938 1.8552 1.695 1.43194C1.89552 1.20519 2.14066 1.02226 2.41511 0.894582C2.68956 0.766908 2.9874 0.697242 3.29 0.689941C3.6191 0.726311 3.9377 0.827692 4.2273 0.988199C4.5169 1.14871 4.77173 1.36514 4.977 1.62494C5.434 2.12194 5.992 2.63994 6.45 3.11794L7.08 3.73794C7.45 4.06594 7.679 4.52394 7.72 5.01794C7.72 5.47094 7.553 5.90794 7.252 6.24694C7.05707 6.48403 6.85013 6.71099 6.632 6.92694L6.429 7.13994C6.311 7.24994 6.221 7.38594 6.165 7.53694C6.115 7.68561 6.095 7.83794 6.105 7.99394C6.266 8.42494 6.519 8.81694 6.845 9.14194C7.354 9.83194 7.862 10.4319 8.38 11.0819C9.31695 12.1697 10.4289 13.0934 11.67 13.8149C11.797 13.9079 11.943 13.9699 12.098 13.9969C12.232 14.0069 12.368 13.9869 12.494 13.9369C12.849 13.7279 13.164 13.4599 13.428 13.1439C13.783 12.7092 14.2927 12.4289 14.85 12.3619C15.3863 12.3693 15.8979 12.5886 16.273 12.9719C16.476 13.1439 16.699 13.3779 16.913 13.6019L17.217 13.9159L17.532 14.2209L18.071 14.7689C18.3923 15.0543 18.6937 15.3593 18.975 15.6839C19.257 16.0739 19.384 16.5569 19.33 17.0349ZM15.684 10.0759C15.4826 10.0739 15.2899 9.99291 15.1475 9.85045C15.005 9.708 14.9241 9.51539 14.922 9.31394C14.9231 8.73872 14.8105 8.16894 14.5909 7.63731C14.3713 7.10567 14.0488 6.62262 13.6421 6.21588C13.2353 5.80913 12.7523 5.48669 12.2206 5.26705C11.689 5.04741 11.1192 4.93489 10.544 4.93594C10.3419 4.93594 10.1481 4.85566 10.0052 4.71276C9.86228 4.56985 9.782 4.37604 9.782 4.17394C9.782 3.97185 9.86228 3.77803 10.0052 3.63513C10.1481 3.49222 10.3419 3.41194 10.544 3.41194C11.3194 3.41076 12.0874 3.56261 12.804 3.85879C13.5206 4.15497 14.1717 4.58967 14.72 5.13795C15.2683 5.68624 15.703 6.33734 15.9992 7.05394C16.2953 7.77054 16.4472 8.53855 16.446 9.31394C16.4463 9.41408 16.4267 9.51329 16.3885 9.60586C16.3503 9.69843 16.2942 9.78253 16.2234 9.85334C16.1526 9.92416 16.0685 9.98027 15.9759 10.0185C15.8833 10.0567 15.7841 10.0762 15.684 10.0759Z" fill="white"/>
            </svg>

            <Link className="!text-xs md:!text-sm fonts" to="#">
              +234 7083457831
            </Link>
            </p>
          <p className="text-white text-xs md:text-sm fonts text-left font-extralight flex gap-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.707 1.39117e-05H1.347C1.17527 -0.000780528 1.00509 0.0324579 0.846276 0.0978092C0.687466 0.16316 0.543178 0.259329 0.421746 0.380761C0.300315 0.502193 0.204146 0.646481 0.138794 0.805291C0.073443 0.964101 0.0402046 1.13429 0.040999 1.30601V16.694C0.040999 17.39 0.620999 18 1.347 18H16.647C16.8188 18.0009 16.9891 17.9678 17.148 17.9025C17.307 17.8372 17.4514 17.7411 17.5729 17.6196C17.6944 17.4982 17.7907 17.3538 17.8561 17.195C17.9215 17.0361 17.9548 16.8658 17.954 16.694V1.27701C18.013 0.581014 17.432 1.39117e-05 16.707 1.39117e-05ZM5.354 15.3H2.713V6.73501H5.355L5.354 15.3ZM4.019 5.54501C3.81664 5.54608 3.61609 5.50698 3.42895 5.43001C3.2418 5.35303 3.07179 5.23969 2.92875 5.09656C2.78571 4.95342 2.67248 4.78333 2.59562 4.59614C2.51877 4.40895 2.47981 4.20837 2.481 4.00601C2.481 3.16501 3.177 2.46801 4.019 2.46801C4.861 2.46801 5.559 3.16501 5.559 4.00601C5.559 4.84701 4.919 5.54501 4.019 5.54501ZM15.371 15.3H12.729V11.148C12.729 10.161 12.7 8.85501 11.336 8.85501C9.942 8.85501 9.739 9.95801 9.739 11.061V15.3H7.097V6.73501H9.681V7.92501H9.71C10.087 7.22901 10.93 6.53201 12.236 6.53201C14.936 6.53201 15.429 8.27401 15.429 10.655V15.3H15.371Z" fill="white"/>
            </svg>

            <Link className="!text-xs md:!text-sm fonts" to="https://www.linkedin.com/company/elsadave-consulting/">Elsadave consulting</Link>
            </p>
          <p className="text-white text-xs md:text-sm fonts text-left font-extralight flex gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.2 0C5.29044 0 3.45909 0.758569 2.10883 2.10883C0.758569 3.45909 0 5.29044 0 7.2L0 16.8C0 18.7096 0.758569 20.5409 2.10883 21.8912C3.45909 23.2414 5.29044 24 7.2 24H16.8C18.7096 24 20.5409 23.2414 21.8912 21.8912C23.2414 20.5409 24 18.7096 24 16.8V7.2C24 5.29044 23.2414 3.45909 21.8912 2.10883C20.5409 0.758569 18.7096 0 16.8 0L7.2 0ZM6.4 12C6.4 10.5148 6.99 9.09041 8.0402 8.0402C9.09041 6.99 10.5148 6.4 12 6.4C13.4852 6.4 14.9096 6.99 15.9598 8.0402C17.01 9.09041 17.6 10.5148 17.6 12C17.6 13.4852 17.01 14.9096 15.9598 15.9598C14.9096 17.01 13.4852 17.6 12 17.6C10.5148 17.6 9.09041 17.01 8.0402 15.9598C6.99 14.9096 6.4 13.4852 6.4 12ZM17.6 6.4H19.2V4.8H17.6V6.4Z" fill="white"/>
            </svg>
              <Link className="!text-xs md:!text-sm fonts" to="https://www.instagram.com/elsadave.ltd/">@Elsadave_consulting</Link>
            </p>
        </div>
        <div className="w-full md:w-[60%]">
          <form className="w-full text-left" onSubmit={handleSubmit}>
           <div className="flex flex-col items-start w-full pb-4">
            <label htmlFor="firstName"  className="w-full required text-white text-left fonts py-2">First Name</label>
            <input
            id="firstName"
            type="text"
            name="firstName"
            value={details.firstName}
            onChange={handleChange}
            required
            className="border-[#FFFFFF33] border w-full p-2 fonts text-white"
            />
           </div>
            <div className="flex w-full gap-10 mb-10">
             <div className="flex-1 text-left">
               <label htmlFor="email" className="block required w-full text-white text-left fonts py-2">Email</label>
                <input
                id="email"
                type="email"
                name="email"
                value={details.email}
                onChange={handleChange}
                required
                className="border-[#FFFFFF33] border w-full p-2 fonts text-white"
                />
             </div>
             <div className="flex-1 text-left">
               <label htmlFor="phoneNumber" className="block required w-full text-white text-left fonts py-2">Phone Number</label>
                <input
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                required
                value={details.phoneNumber}
                onChange={handleChange}
                className="border-[#FFFFFF33] border w-full p-2 fonts text-white"
                />
             </div>
            </div>
            <div className="text-left">
            <label htmlFor="message"  className=" required block w-full text-white text-left fonts py-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={details.message}
                onChange={handleChange}
                required
                rows={10}
                className="border-[#FFFFFF33] border w-full p-2 fonts text-white"
              ></textarea>
            </div>
            <button type="submit" className="bg-white px-4 py-2 text-[#002651] text-sm font-extralight fonts mt-4">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
