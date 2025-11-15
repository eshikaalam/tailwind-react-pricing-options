import React from 'react'
import {use} from 'react'
import { Bar, BarChart, XAxis, YAxis  } from 'recharts';

function MarksChart({marksPromise}) {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    //data processing
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math
        }
        const avg = (student.physics + student.chemistry + student.math)/3;
        student.avg = avg;
        return student;
    })
  return (
    <div>
        <BarChart width={700} height={300} data={marksChartData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Bar dataKey="avg" fill='green'></Bar>
            <Bar dataKey="chemistry" fill='lightGray'></Bar>
        </BarChart>
    </div>
  )
}

export default MarksChart