import React from 'react'

const ContactForm = () => {
  return (
    <form class="row g-3">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="" />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="" />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Subject</label>
        <input type="text" class="form-control" id="" />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Phone</label>
        <input type="text" class="form-control" id="" />
      </div>
      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">Messages</label>
        <textarea rows={6} type="text" class="form-control" id="" />
      </div>

      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div class="col-12">
    
        <a href="#" className="gs-btn gs-btn-primary">Sand Message</a>
      </div>
    </form>
  )
}

export default ContactForm