import "./PoetryAndSong.css";

const PoetryAndSong = () => {
  return (
    <div>
        <div className="poetry-song-container">
  <h2>Poetry & Song Writing</h2>
  
  <form className="poetry-song-form">
    <div className="form-group">
      <label>Title</label>
      <input type="text" id="title" name="title" placeholder="Enter the title of your poem or song" />
    </div>

    <div className="form-row">
      <div className="form-group half-width">
        <label>Genre</label>
        <select id="genre" name="genre">
          <option value="">Select genre</option>
          <option value="lyric">Lyric Poetry</option>
          <option value="narrative">Narrative Poetry</option>
          <option value="sonnet">Sonnet</option>
          <option value="haiku">Haiku</option>
          <option value="free-verse">Free Verse</option>
          <option value="ballad">Ballad</option>
          <option value="rock">Rock Song</option>
          <option value="pop">Pop Song</option>
          <option value="rap">Rap/Hip-Hop</option>
        </select>
      </div>

      <div className="form-group half-width">
        <label>Mood</label>
        <input type="text" id="mood" name="mood" placeholder="e.g., Melancholic, Upbeat, Reflective" />
      </div>
    </div>

    <div className="form-group">
      <label >Lyrics/Poem</label>
      <textarea id="lyrics" name="lyrics" rows="15" placeholder="Write your lyrics or poem here"></textarea>
    </div>

    <div className="form-row">
      <div className="form-group half-width">
        <label >Rhyme Scheme</label>
        <input type="text" id="rhyme-scheme" name="rhyme-scheme" placeholder="e.g., ABAB, AABB" />
      </div>

      <div className="form-group half-width">
        <label >Meter (if applicable)</label>
        <input type="text" id="meter" name="meter" placeholder="e.g., Iambic Pentameter" />
      </div>
    </div>

    <div className="form-group">
      <label >Additional Notes</label>
      <textarea id="notes" name="notes" rows="4" placeholder="Any additional notes, inspirations, or context"></textarea>
    </div>

    <div className="form-row">
      <div className="form-group half-width">
        <label >Upload Audio (optional)</label>
        <input type="file" id="audio-file" name="audio-file" accept="audio/*" />
      </div>

      <div className="form-group half-width">
        <label >Collaborators</label>
        <input type="text" id="collaboration" name="collaboration" placeholder="Enter collaborator names" />
      </div>
    </div>

    <button type="submit" className="submit-button">Save Composition</button>
  </form>
</div>
      
    </div>
  )
}

export default PoetryAndSong
