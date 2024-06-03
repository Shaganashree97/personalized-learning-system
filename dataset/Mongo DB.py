from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')

db = client['content_database']

collection = db['content_collection']

data = [
    {
        "topic": "Percentages",
        "Article":"https://www.geeksforgeeks.org/percentage-aptitude-questions/",
        "Youtube":"https://youtu.be/RWdNhJWwzSs"
    },
    {
        "topic": "Boats and streams",
        "Article":"https://www.bing.com/search?q=boats+and+streams&FORM=HDRSC1",
        "Youtube":"https://youtu.be/yp2tgfwT3YU"
    },
    {
        "topic": "Age problems",
        "Article":"https://byjus.com/govt-exams/age-problems/",
        "Youtube": "https://youtu.be/b9YMbDH02rM"
    },
    {
        "topic": "Time, distance, speed",
        "Article":"https://byjus.com/speed-distance-time-formula/",
        "Youtube":"https://youtu.be/dHVK7IeLGT8"
    },
    {
        "topic": "Number series",
        "Article":"https://www.geeksforgeeks.org/number-series-in-quantitative-aptitude/",
        "Youtube":"https://youtu.be/iwpd_RkG-1U"
    },
    {
        "topic": "Pipes and cisterns",
        "Article": "https://byjus.com/govt-exams/pipes-cistern-questions/",
        "Youtube":"https://youtu.be/AHEFRed92zM"
    }
]

collection.insert_many(data)

print("Data inserted successfully!")
