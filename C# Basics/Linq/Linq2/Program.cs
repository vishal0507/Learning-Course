using System;
using System.Linq;
using System.Collections.Generic;

namespace Linq2;

    public class Program
    {
        public static  void Main(string[] args)
        {
            List<CityDetails> cityList=new List<CityDetails>
            {
                new CityDetails{CityName="ABU DHABI"},
                new CityDetails{CityName="AMSTERDAM"},
                new CityDetails{CityName="ROME"},
                new CityDetails{CityName="MADURAI"},
                new CityDetails{CityName="LONDON"},
                new CityDetails{CityName="NEW DELHI"},
                new CityDetails{CityName="MUMBAI"},
                new CityDetails{CityName="NAIROBI"},
            };
            var records=from city in cityList orderby city.CityName.Length orderby city.CityName select city;
            foreach(var record in records)
            {
                Console.WriteLine(record.CityName);
            }
        }
    }
