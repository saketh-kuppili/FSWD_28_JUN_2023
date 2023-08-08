
import React from 'react'

export default function CourseList2() {
  let courses = [
    { title: 'Python', fee: 10000 },
    { title: 'AWS', fee: 5000 },
    { title: 'Java EE + Hibernate + Spring', fee: 20000 }
  ]

  return (
    <>
      <h1>Courses</h1>
      <table className="table table-bordered">
        <tr>
          <th>Title</th>
          <th>Fee</th>
        </tr>
        {
          courses.map(c => <tr><td>{c.title}</td>
            <td style={{textAlign : 'right'}}>{c.fee}</td></tr>)
        }
      </table>
    </>
  )
}
