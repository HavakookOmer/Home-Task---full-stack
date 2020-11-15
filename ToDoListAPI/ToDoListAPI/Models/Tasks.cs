using System;
using System.Collections.Generic;

namespace ToDoListAPI.Models
{
    public partial class Tasks
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public string TaskContent { get; set; }

        public virtual Users User { get; set; }
    }
}
