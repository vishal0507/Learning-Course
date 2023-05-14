using System.Net;
using System.Runtime.ConstrainedExecution;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppointmentSystem
{
    public static class AppointmentManager
    {
        public static List<Doctor> doctorList = new List<Doctor>();
        public static List<Patient> patientList = new List<Patient>();
        public static List<Appointment> appointmentList = new List<Appointment>();
        public static Patient currentPatient;


        public static void MainMenu()
        {
            int option=0;


            do
            {
                System.Console.WriteLine("Enter: \n1.Login  \n2.Register \n3.Exit");
                option = int.Parse(Console.ReadLine());

                switch (option)
                {
                    case 1:
                        {
                            Login();
                            break;
                        }
                    case 2:
                        {
                            Registration();
                            break;
                        }
                    case 3:
                        {
                            break;
                        }
                }
            } while (option != 3);



        }

        public static void Registration()
        {
            System.Console.WriteLine("Enter your name:");
            string name = Console.ReadLine();
            System.Console.WriteLine("Enter your password");
            string password = Console.ReadLine();
            System.Console.WriteLine("Enter your Age");
            int age = int.Parse(Console.ReadLine());
            System.Console.WriteLine("Enter your gender:");
            Gender gender = Enum.Parse<Gender>(Console.ReadLine(), true);
            Patient patient = new Patient(password, name, age, gender);
            patientList.Add(patient);
            System.Console.WriteLine("Your PatientID is " + patient.PatientID);
        }

        public static void Login()
        {
            string choose = "";
            bool flag = true;
            do
            {
                System.Console.WriteLine("Enter your name: ");
                string loginName = Console.ReadLine();
                System.Console.WriteLine("Enter your password: ");
                string loginPassword = Console.ReadLine();

                foreach (Patient patient in patientList)
                {
                    if (loginName == patient.Name && loginPassword == patient.Password)
                    {
                        flag = false;
                        currentPatient = patient;
                        System.Console.WriteLine("Login successfully.");
                        SubMenu();

                    }
                }
                if (flag)
                {
                    System.Console.WriteLine("Sorry, your record is invalid.");
                }
                System.Console.WriteLine("Enter (yes/no) to continue");
                choose = Console.ReadLine().ToLower();


            } while (choose == "yes");


        }

        public static void SubMenu()
        {
            System.Console.WriteLine("Enter: \n1. Book Appointment \n2. View Appointment details \n3. Edit my profile \n4.Exit");
            int choice = int.Parse(Console.ReadLine());
            switch (choice)
            {
                case 1:
                    {
                        BookAppointment();
                        break;
                    }
                case 2:
                    {
                        ViewAppointment();
                        break;
                    }
                case 3:
                    {
                        EditPatientProfile();
                        break;

                    }
                case 4:
                    {

                        break;
                    }
            }
        }
        public static void DefaultDatas()
        {
            Doctor doctor1 = new Doctor("vishal", "Anaesthesiology");
            doctorList.Add(doctor1);
            Doctor doctor2 = new Doctor("vishnu", "Cardiology");
            doctorList.Add(doctor2);
            Doctor doctor3 = new Doctor("rahul", "Diabetology");
            doctorList.Add(doctor3);
            Patient patient1 = new Patient("welcome", "Robert", 40, Gender.Male);
            patientList.Add(patient1);
            Patient patient2 = new Patient("welcome", "Laure", 36, Gender.Female);
            patientList.Add(patient2);
            Patient patient3 = new Patient("welcome", "Anne", 50, Gender.Female);
            patientList.Add(patient3);
            Patient patient4 = new Patient("welcome", "Wisen", 20, Gender.Male);
            patientList.Add(patient4);
            Appointment appointment1 = new Appointment("1", "1", DateTime.Now.AddDays(1), "Heart Problem");
            appointmentList.Add(appointment1);
            Appointment appointment2 = new Appointment("2", "2", DateTime.Now.AddDays(3), "Heart Attack");
            appointmentList.Add(appointment2);
            Appointment appointment3 = new Appointment("3", "3", DateTime.Now, "Spinal cord injury");
            appointmentList.Add(appointment3);
            Appointment appointment4 = new Appointment("4", "4", DateTime.Now.AddDays(1), "Food Poison");
            appointmentList.Add(appointment4);

        }
        public static void BookAppointment()
        {

            char choose = ' ';
            do
            {
                System.Console.WriteLine("Enter your problem: ");
                string problem = Console.ReadLine();
                System.Console.WriteLine("Select Department to have an Appointment: \n1. Anaesthesiology \n2. Cardiology \n3. Diabetology \n4. Neonatology \n5. Nephrology");
                string option = Console.ReadLine().ToUpper();
                foreach (Doctor doctor in doctorList)
                {
                    if (option == doctor.Department.ToUpper())
                    {
                        foreach (Appointment appoint in appointmentList)
                        {

                            System.Console.WriteLine($"Appointment is confirmed for the date {appoint.Date.ToString("dd/MM/yyyy")}. To book press “Y”, to cancel press “N”.");
                            choose = char.Parse(Console.ReadLine().ToUpper());
                            if (choose == 'Y')
                            {
                                Appointment appointed = new Appointment(currentPatient.PatientID, doctor.DoctorID, DateTime.Now, problem);
                                appointmentList.Add(appointed);
                                System.Console.WriteLine("Your appointment booked successfully..Your Appointment ID is " + appointed.AppointmentID);
                            }

                        }
                    }
                }
            } while (choose == 'N');

        }
        public static void ViewAppointment()
        {
            foreach (Appointment appoint in appointmentList)
            {
                if (appoint.PatientID == currentPatient.PatientID)
                {
         
                    System.Console.WriteLine($"AppointmentID {appoint.AppointmentID} PatirntID {appoint.PatientID} DoctorID {appoint.DoctorID} Date {appoint.Date.ToString("dd/MM/yyyy")} Problem {appoint.Problem}");
                }
            }

        }
        public static void EditPatientProfile()
        {
            
            foreach(Patient patient in patientList)
            {
                if(currentPatient.PatientID==patient.PatientID)
                {

                    System.Console.WriteLine($"{"Patient ID- "+patient.PatientID}|{"Patient Password- "+patient.Password}|{"Patient Name- "+patient.Name}|{"Patient Age- "+patient.Age}|{"Patient Gender- "+patient.Gender}");
                }
            }
            System.Console.WriteLine("Enter what you want to edit\n1.Name\n2.Password\n3.age\n4.Gender");
            int choice=int.Parse(Console.ReadLine());
            switch(choice)
            {
                case 1:
                {
                    System.Console.WriteLine("Enter a name to modify ");
                    string newName=Console.ReadLine();
                    currentPatient.Name=newName;
                    break;
                }
                case 2:
                {
                    System.Console.WriteLine("Enter a new password  ");
                    string newPassword=Console.ReadLine();
                    currentPatient.Password=newPassword;
                    break;
                }
                case 3:
                {
                    System.Console.WriteLine("Enter a age to modify");
                    int newAge=int.Parse(Console.ReadLine());
                    currentPatient.Age=newAge;
                    break;
                }
                case 4:
                {
                    System.Console.WriteLine("Enter gender to modify");
                    Gender newGender=Enum.Parse<Gender>(Console.ReadLine(),true);
                    currentPatient.Gender=newGender;
                    break;
                }
            }

            foreach(Patient patient in patientList)
            {
                if(currentPatient.PatientID==patient.PatientID)
                {
                    System.Console.WriteLine("Your Modified Profile is Upldated you can see beloww...");
                    System.Console.WriteLine($"|{"Patient ID- "+patient.PatientID}|{"Patient Password- "+patient.Password}|{"Patient Name- "+patient.Name}|{"Patient Age- "+patient.Age}|{"Patient Gender- "+patient.Gender}");
                }
            }

        }
    }
}