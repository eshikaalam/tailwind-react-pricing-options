import React from 'react'
import { LineChart, XAxis, YAxis } from 'recharts'
import { Line } from 'recharts'


const resultData = [
  { "id": 1, "name": "Student 1", "physics": 85, "chemistry": 78, "math": 92 },
  { "id": 2, "name": "Student 2", "physics": 74, "chemistry": 81, "math": 88 },
  { "id": 3, "name": "Student 3", "physics": 91, "chemistry": 89, "math": 95 },
  { "id": 4, "name": "Student 4", "physics": 67, "chemistry": 72, "math": 64 },
  { "id": 5, "name": "Student 5", "physics": 88, "chemistry": 90, "math": 85 },
  { "id": 6, "name": "Student 6", "physics": 79, "chemistry": 75, "math": 80 },
  { "id": 7, "name": "Student 7", "physics": 93, "chemistry": 88, "math": 91 },
  { "id": 8, "name": "Student 8", "physics": 56, "chemistry": 60, "math": 58 },
  { "id": 9, "name": "Student 9", "physics": 82, "chemistry": 77, "math": 83 },
  { "id": 10, "name": "Student 10", "physics": 69, "chemistry": 73, "math": 70 }
]

function ResultsChart() {
  return (
    <div>
        <LineChart width={800} height={500} data={resultData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
           <Line type="monotone" dataKey="math" stroke="#ff0000"/>
           <Line type="monotone" dataKey="chemistry" stroke="#677788"></Line>
        </LineChart>
    </div>
  )
}

export default ResultsChart