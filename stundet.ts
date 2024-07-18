
const getAllStudents = () => {
    return student
  }

  const getOnSiteStudents = () => {
    const result = student.filter((student) => student.isOnSiteAllowed)
        return result
    }

    const onsiteStudents = getOnSiteStudents()
    console.log(`onsiteStudents: ${onsiteStudents}`)