import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiBadge from "components/VuiBadge";

function Name({ name, id }) {
  return (
    <VuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <VuiBox display="flex" flexDirection="column">
        <VuiTypography variant="button" color="white" fontWeight="medium">
          {name}
        </VuiTypography>
        <VuiTypography variant="caption" color="text">
          Code_PCT : {id}
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

function Category({ cat }) {
  return (
    <VuiBox display="flex" flexDirection="column">
      <VuiTypography variant="caption" fontWeight="medium" color="white">
        {cat}
      </VuiTypography>
    </VuiBox>
  );
}
export default {
  columns: [
    { name: "name", align: "left" },
    { name: "category", align: "left" },
    { name: "status", align: "center" },
    { name: "DCI", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      name: <Name name="ABBOTICINE Susp Or.200mg/5ml Fl 60ml" id="304172" />,
      category: <Category cat="E" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Available"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      DCI: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          ACARBOSE
        </VuiTypography>
      ),
      action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </VuiTypography>
      ),
    },
    {
      name: <Name name="ACARLYSE 50 mg Comp B 90" id="303000" />,
      category: <Category cat="E" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="not available"
          size="xs"
          container
          sx={({ palette: { white, error }, borders: { borderRadius, borderWidth } }) => ({
            background: error.main,
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      DCI: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          ARIPIPRAZOLE
        </VuiTypography>
      ),
      action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </VuiTypography>
      ),
    },
    {
      name: <Name name="ACIRYL Gelule 75 MG  BT 15" id="302487" />,
      category: <Category cat="V" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Available"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      DCI: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          PREGABALINE
        </VuiTypography>
      ),
      action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </VuiTypography>
      ),
    },
    {
      name: <Name name="ALGESIC Comp Sec 1000 MG BT  8" email="301606" />,
      category: <Category cat="E" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Available"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      DCI: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          PARACETAMOL
        </VuiTypography>
      ),
      action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </VuiTypography>
      ),
    },
    {
      name: <Name name="ALLERGICA  Comp 10mg  Bt 20" id="300221" />,
      category: <Category cat="E" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="not available"
          size="xs"
          color="error"
          container
          sx={({ palette: { white, error }, borders: { borderRadius, borderWidth } }) => ({
            background: error.main,
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      DCI: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          CETIRIZINE
        </VuiTypography>
      ),
      action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </VuiTypography>
      ),
    },
    {
      name: <Name name="ALLERGICA Comp 10 mg Bt 30" id="301380" />,
      category: <Category cat="E" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="not available"
          size="xs"
          color="error"
          container
          sx={({ palette: { white, error }, borders: { borderRadius, borderWidth } }) => ({
            background: error.main,
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      DCI: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          CETIRIZINE
        </VuiTypography>
      ),
      action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </VuiTypography>
      ),
    },
  ],
};
