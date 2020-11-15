using System;
using System.Collections.Generic;

namespace ToDoListAPI.Models
{
    public partial class Users
    {
        public Users()
        {
            Tasks = new HashSet<Tasks>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Tasks> Tasks { get; set; }
    }
}
