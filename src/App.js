import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";

const App = () => {
  let [developers, setDevelopers] = useState([
    {
      id: 1,
      name: "kyaw naing tun",
      position: "team leader",
    },
    {
      id: 2,
      name: "kuro",
      position: "junior developer",
    },
    {
      id: 3,
      name: "waiyan",
      position: "senior developer",
    },
  ]);
  let [interns, setInterns] = useState([
    {
      id: 4,
      name: "zaw zaw",
      position: "intern",
    },
    {
      id: 5,
      name: "kyaw kyaw",
      position: "intern",
    },
    {
      id: 6,
      name: "mya mya ",
      position: "intern",
    },
  ]);
  return (
    <div>
      <h1>Developers</h1>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Position</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {developers.map((developer, index) => (
            <Tr key={index}>
              <Td>{developer.name}</Td>
              <Td>{developer.position}</Td>
              <Td>
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    // add to interns setAddableData
                    setInterns((prevState) => [...prevState, developer]);
                    // remove from developer addedColumn
                    setDevelopers(
                      developers.filter((item) => item.id !== developer.id)
                    );

                    //  // add to Addable Column
                    //  setAddableData((prevState) => [...prevState, addable]);

                    //  // remove from Added Column
                    //  setAddedItems(
                    //    items.filter((column) => column.id !== item.id)
                    //  );
                  }}
                >
                  Remove to interns
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <hr />
      <br />
      {/* interns */}
      <h1>Interns</h1>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Position</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {interns.map((intern, index) => (
            <Tr key={index}>
              <Td>{intern.name}</Td>
              <Td>{intern.position}</Td>
              <Td>
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    // add to developers
                    setDevelopers((prevState) => [...prevState, intern]);

                    // remove from interns
                    setInterns(interns.filter((item) => item.id !== intern.id));

                    //  // add to Added Column
                    //  setAddedItems((prevState) => [...prevState, addable]);

                    //  // remove from Addable Column
                    //  setAddableData(
                    //    addableData.filter((item) => item.id !== addable.id)
                    //  );
                  }}
                >
                  Add to developers
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default App;
