import { JournalEntry } from "./JournalEntry"

export const JournalEntries = () => {
  const entrie = [1,2,3,4,5,6]
  return (
    <div className="journal__entries">
      {
        entrie.map(value => (
          <JournalEntry key={ value } />
        ))
      }
    </div>
  )
}
