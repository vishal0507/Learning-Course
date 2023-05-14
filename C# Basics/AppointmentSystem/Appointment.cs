using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppointmentSystem
{
    public class Appointment
    {
        private static int s_appointmentID=0;
        public string AppointmentID{get;set;}
        public string PatientID{get;set;}
        public string DoctorID{get;set;}
        public DateTime Date{get;set;}
        public string Problem{get;set;}
        public Appointment(string patientID,string doctorID,DateTime date,string problem)
        {
            s_appointmentID++;
            AppointmentID=""+s_appointmentID;
            PatientID=patientID;
            DoctorID=doctorID;
            Date=date;
            Problem=problem;
        }
    }
}