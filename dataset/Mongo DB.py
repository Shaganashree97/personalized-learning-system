from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')

db = client['content_database']

collection = db['content_collection']

data = [
    {
        "topic": "Percentages",
        "links": [
            "https://www.geeksforgeeks.org/percentage-aptitude-questions/",
            "https://youtu.be/RWdNhJWwzSs"
        ]
    },
    {
        "topic": "Boats and streams",
        "links": [
            "https://youtu.be/yp2tgfwT3YU",
            "https://www.bing.com/search?q=boats+and+streams&FORM=HDRSC1"
        ]
    },
    {
        "topic": "Age problems",
        "links": [
            "https://youtu.be/b9YMbDH02rM",
            "https://byjus.com/govt-exams/age-problems/"
        ]
    },
    {
        "topic": "Time, distance, speed",
        "links": [
            "https://byjus.com/speed-distance-time-formula/",
            "https://youtu.be/dHVK7IeLGT8"
        ]
    },
    {
        "topic": "Number series",
        "links": [
            "https://www.geeksforgeeks.org/number-series-in-quantitative-aptitude/",
            "https://youtu.be/iwpd_RkG-1U"
        ]
    },
    {
        "topic": "Pipes and cisterns",
        "links": [
            "https://byjus.com/govt-exams/pipes-cistern-questions/",
            "https://youtu.be/AHEFRed92zM"
        ]
    }
]

collection.insert_many(data)

print("Data inserted successfully!")
