using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppointmentSystem
{
    public enum Gender{Default,Male,Female}
    public class Patient
    {
        private static int s_patientID=0;
        public string PatientID{get;set;}
        public string Password{get;set;}
        public string Name{get;set;}
        public int Age{get;set;}
        public Gender Gender{get;set;}
        public Patient(string password,string name,int age,Gender gender)
        {
            s_patientID++;
            PatientID=""+s_patientID;
            Password=password;
            Name=name;
            Age=age;
            Gender=gender;
            
        }


    }
}