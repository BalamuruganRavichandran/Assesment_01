import { useState } from "react";
import Highlighter from "react-highlight-words";
import './Search.css'
export const Search = () => {
  const arr = [
    {
      ticketId: "DNACP-10550",
      releaseDate: "2nd Sep 2023",
      package: "dnac-search:6.3.4",
      release: "testRelease",
    },
    {
      ticketId: "DNACP-10776",
      releaseDate: "13th Sep 2023",
      package: "dnac-search:6.3.1",
      release: "testRelease",
    },
    {
      releaseDate: "10th Sep 2023",
      package: "dnac-search:6.3.8",
      release: "testRelease",
    },
    {
      releaseDate: "23rd Sep 2023",
      package: "dnac-search:6.3.5",
      release: "testRelease",
    },
    {
      ticketId: "DNACP-10780",
      releaseDate: "25th Sep 2023",
      package: "dnac-search:6.3.1",
      release: "testRelease",
    },
    {
      ticketId: "DNACP-10643",
      releaseDate: "30th Sep 2023",
      package: "dnac-search:6.4",
      release: "testRelease",
    }
  ];
    
    const [ filter, setFilter ] = useState();
    const [ search, setSearch ] = useState();

    const filterTitle = ( e ) =>
    {
        const query = e.target.value;
        console.log( query, "query" );
        setSearch( query );
        const list = [ ...arr ];

        if ( query.trim().length>=3 )
        {
            const updatedArr = list.filter( ( item ) =>
            {
                console.log( item.ticketId || item.package);
                return (item.ticketId||item.package)?.toLowerCase().trim().includes( query?.toLowerCase().trim() );
            } );
            console.log( updatedArr, "array" );
            setFilter( updatedArr )
        }
        else
        {
            setFilter();
        }
    }
    return (
      <>
    <div className="search-header">
          
      <input type="text" id="search-box" placeholder="Search Here !" onChange={filterTitle}/>
    </div>
            <div className="item-list">
                {filter?.length===0?<h5>No results found!!!</h5>:''}
           <ul>
            
        {filter?.map((item, index) => {
          return (
            <div className="search-container" key={index}>
              <div className="left">
                { item.ticketId ? (
                  <>
                  <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={[search]}
                    autoEscape={true}
                    textToHighlight={item.ticketId}
                  />
                  <p>
                    <b>Package:</b>
                    {item.package}
                  </p>
                    </>
                ) : (
                    <p>
                      <b>Package:</b>
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[search]}
                      autoEscape={true}
                      textToHighlight={item.package}
                    />
                  </p>
                )}
                
              </div>
              <div className="right">
                <p>
                  <b>release:</b>
                  {item.release}
                </p>
                <p>
                  <b>release Date:</b>
                  {item.releaseDate}
                </p>
              </div>
            </div>
          );
        })}
      </ul>
      </div>
      </>
  );
};