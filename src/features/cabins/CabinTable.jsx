import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabin } from "./useCabin";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { cabins, isLoading } = useCabin();
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;

  if (!cabins.length) return <Empty resource="cabins" />;

  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  else if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  else filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  const sortBy = searchParams.get("sort") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  filteredCabins.sort((a, b) => (a[field] - b[field]) * modifier);

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={filteredCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
