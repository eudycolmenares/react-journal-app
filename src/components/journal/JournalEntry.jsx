export const JournalEntry = () => {
  return (
    <div className="journal__entry mb-2">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTkdb9VaAL5dQjFa5c1vtt5Cjplwo8nPU_9A&usqp=CAU)'
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal___entry-title">A new day</p>
        <p className="journal___entry-content">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}
