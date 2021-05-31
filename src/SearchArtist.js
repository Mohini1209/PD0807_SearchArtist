import React from 'react';

class SearchArtist extends React.Component
{
    constructor(props)
    {
        super(props);
        this.artist_name = React.createRef();
        this.state = { 
            aname : " ",
            artist : [],
            
         }
         this.handleSubmit = this.handleSubmit.bind(this);
         this.artistOnChange = this.artistOnChange.bind(this);
    }

/*componentDidMount()
    {
        //let artist_name = this.artist_name.current.value;
        alert(this.state.aname)
       // console.log(artist_name);
        //alert('https://itunes.apple.com/search?term='+artist_name)
        fetch('https://itunes.apple.com/search?term='+this.state.aname+'&limit=5')
        .then(response =>
            response.json())
        
        .then((data) =>{
            alert(JSON.stringify(data));
          this.setState({
            artist: data.results
            
          });
        })
  
    }*/
    artistOnChange(e)
    {
        this.setState({aname:e.target.value});
    }
   searchArtist(value) {
        
       // alert(this.state.aname);
        fetch('https://itunes.apple.com/search?term='+this.state.aname+'&limit=20')
        .then(response =>
            response.json())
        
        .then((data) =>{
           // alert(JSON.stringify(data));
          this.setState({
            artist: data.results
            
          });
        })
    }
    handleSubmit(e){
        const value = e.target.value;
        this.setState({aname:value})
        e.preventDefault();
        this.searchArtist(value);
    }
    render()
    {
        //const artist = this.state.artist;
        return(
        <div className="container">
           
                <div>
                    <div className="row">
                    <div className="col-md-2"></div>
                <div className="col-md-8">
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Artist Name</td>
                                <td><input type="text" className="form-control" value={this.state.aname} name="artist_name" onChange={this.artistOnChange}/></td>
                            </tr>
                            <tr>
                                <td colspan="2"><input type="submit"  className="btn btn-primary" value="Submit"/></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                </div>
                
                <div className="col-md-2"></div>
                </div>
                <div>
               <h2>Search Results</h2>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Artist Id</th>
                        <th>Artist Name</th>
                        <th>Track Name</th>
                        <th>View</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                {this.state.artist.map((a) =>{
                    return(
                                 <tr>
                                    <td>{a.artistId}</td>
                                    <td>{a.artistName}</td>
                                    <td>{a.trackName}</td>
                                    <td><a href={a.trackViewUrl}>{a.trackViewUrl}</a></td>
                                </tr>
                               
                        
                 ) })}
                  </tbody>
                            </table>
                </div>
            </div>
          
        </div>
        )
    }
}
export default SearchArtist;