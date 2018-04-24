using MyBlogProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web.Http;


namespace MyBlogProject.Controllers
{
    public class ContactController : ApiController
    {
      
        [HttpPost]
        public bool PostForm([FromBody]Contact contact)
        {
            try
            {
                string myMail = "ylmazbarscan@gmail.com";
                SmtpClient smtpClient = new SmtpClient();
                smtpClient.Port = 587;
                smtpClient.Host = "smtp.gmail.com";
                smtpClient.EnableSsl = true;
                smtpClient.Credentials = new NetworkCredential("bariscanyilmazcontact@gmail.com", "Y!m@z13ar$C@n");
                MailMessage mail = new MailMessage();
                mail.From = new MailAddress(contact.Mail, contact.NameSurname);
                mail.To.Add(myMail);
                mail.Subject = "Contact Mail";
                mail.IsBodyHtml = true;
                mail.Body = "<h3>Name:" + contact.NameSurname + "</h3><h4>Number:" + contact.PhoneNumber+ "</h4><h4>Mail:" + contact.Mail + "</h4><p class='message'>Message:<br>" + contact.Message+ "</p>";
                smtpClient.Send(mail);

                return true ;
            }
            catch (Exception e)
            {
                return false;
            }
        }


    }
}
