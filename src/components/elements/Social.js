import React from 'react'

const Social = () => {
  return (
    <>
    <div class="container" id="media">
      {/* Section: Social media */}
      <section class="social">
        {/* Facebook */}
        <a class="btn btn-style"
          href="#!"
          role="button">
          <i class="fab fa-facebook-f"></i></a>

        {/* Twitter */}
        <a class="btn btn-style"
          href="#!"
          role="button">
          <i class="fab fa-twitter"></i></a>

        {/* Google */}
        <a class="btn btn-style"
          href="#!"
          role="button">
          <i class="fab fa-google"></i></a>

        {/* Instagram */}
        <a class="btn btn-style"
          href="#!"
          role="button">
          <i class="fab fa-instagram"></i></a>

        {/* Linkedin */}
        <a class="btn btn-style"
          href="#!"
          role="button">
          <i class="fab fa-linkedin-in"></i></a>
        {/* Github */}
        <a class="btn btn-style"
          href="#!"
          role="button">
          <i class="fab fa-github"></i></a>
      </section>
    </div>
    </>
  )
}

export default Social
