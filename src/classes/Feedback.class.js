export class Feedback {
    constructor(email, feedback) {
      this.email = email;
      this.feedback = feedback;
      this.timestamp = new Date().toISOString();
    }
  }
  
  
  