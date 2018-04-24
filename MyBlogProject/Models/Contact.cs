using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;


namespace MyBlogProject.Models
{
    public class Contact
    {
        public string NameSurname { get; set; }
        public int PhoneNumber { get; set; }
        public string Mail { get; set; }
        public string Message { get; set; }
    }

}