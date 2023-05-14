using System.Linq.Expressions;
using System.Collections.Generic;
using System.Linq;
namespace Linq1;
class Program
{
    public static void Main(string[] args)
    {
        List<CityDetails> cites = new List<CityDetails>
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

        var records=from city in cites where city.CityName.StartsWith("M")&city.CityName.EndsWith("I") select city;
        foreach(var record in records)
        {
            System.Console.WriteLine(record.CityName);
        }

    }
}
