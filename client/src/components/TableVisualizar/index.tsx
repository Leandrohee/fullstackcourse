import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function TableVisualizar() {

    const align = "center";

    function createData(
        firstName: string,
        lastName: string,
        age: number,
        profession: string,
      ){
        const fullName = firstName + " " + lastName
        return { firstName, lastName, fullName, age, profession };
      }

    const rows = [
        createData('Leandro', 'Torres', 29, 'Bombeiro'),
        createData('Rafael', 'Torres', 27, 'Engenheiro'),
        createData('Felipe', 'Torres', 18, 'Estudante'),
      ];

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align={align}>First Name</TableCell>
              <TableCell align={align}>Last Name</TableCell>
              <TableCell align={align}>Full Name</TableCell>
              <TableCell align={align}>Age</TableCell>
              <TableCell align={align}>Profession</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align={align}>{row.firstName}</TableCell>
                <TableCell align={align}>{row.lastName}</TableCell>
                <TableCell align={align}>{row.fullName}</TableCell>
                <TableCell align={align}>{row.age}</TableCell>
                <TableCell align={align}>{row.profession}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }